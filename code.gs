// Google Apps Script for the wedding site: saves RSVPs and wishes to Google Sheets.
// Sheet: https://docs.google.com/spreadsheets/d/1nL4qNGxLPEMyrPyVLvkjyrqlSWauYrIkEkyhK8qEHMY/edit
//
// Setup:
//   1. Open the sheet > Extensions > Apps Script, replace everything with this file, Save.
//   2. Run `setup` once (approve the permissions) - creates the "RSVP" and "Wishes" sheets with headers.
//   3. Deploy > New deployment > Web app: Execute as "Me", Who has access "Anyone" > Deploy.
//   4. Put the Web app URL in SCRIPT_URL in lib/googleSheets.ts, then redeploy the site.

var SPREADSHEET_ID = '1nL4qNGxLPEMyrPyVLvkjyrqlSWauYrIkEkyhK8qEHMY';
var TIME_ZONE = 'Asia/Colombo';

var SHEETS = {
  rsvp: {
    name: 'RSVP',
    color: '#A6D5F7',
    headers: ['Submitted At', 'Guest Name', 'No. of Guests', 'Meal Preference', 'Dietary Notes', 'Table', 'Source'],
    widths: [170, 220, 110, 150, 260, 80, 110],
    row: function (p, time) {
      return [time, p.name || '', p.guests || '', p.meal || '', p.dietary || '', p.table || '', p.source || 'website'];
    },
  },
  wish: {
    name: 'Wishes',
    color: '#F7D6DE',
    headers: ['Submitted At', 'Name', 'Wish', 'Source'],
    widths: [170, 220, 480, 110],
    row: function (p, time) {
      return [time, p.name || '', p.message || '', p.source || 'website'];
    },
  },
};

// Run once from the Apps Script editor to create both sheets.
function setup() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  Object.keys(SHEETS).forEach(function (key) {
    getSheet_(ss, SHEETS[key]);
  });
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);

    var body = e && e.postData && e.postData.contents ? e.postData.contents : '{}';
    var payload = JSON.parse(body);
    var config = SHEETS[String(payload.formType || '').toLowerCase()];
    if (!config) throw new Error('Invalid formType. Expected rsvp or wish.');

    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = getSheet_(ss, config);
    var submittedAt = payload.submittedAt ? new Date(payload.submittedAt) : new Date();
    var time = Utilities.formatDate(submittedAt, TIME_ZONE, 'yyyy-MM-dd hh:mm a');

    sheet.appendRow(config.row(payload, time));

    return json_({ success: true });
  } catch (err) {
    return json_({ success: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Open the Web app URL in a browser to check the deployment works.
function doGet() {
  return json_({ success: true, message: 'Wedding RSVP & Wishes script is running' });
}

// Returns the sheet, creating it with styled headers if it is missing or empty.
function getSheet_(ss, config) {
  var sheet = ss.getSheetByName(config.name) || ss.insertSheet(config.name);
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, config.headers.length)
      .setValues([config.headers])
      .setFontWeight('bold')
      .setBackground(config.color)
      .setHorizontalAlignment('center');
    sheet.setFrozenRows(1);
    config.widths.forEach(function (width, i) {
      sheet.setColumnWidth(i + 1, width);
    });
    // Keep long wishes / notes readable
    sheet.getRange(1, 1, sheet.getMaxRows(), config.headers.length).setWrap(true).setVerticalAlignment('top');
  }
  return sheet;
}

function json_(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
