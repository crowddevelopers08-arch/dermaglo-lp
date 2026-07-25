/**
 * Google Apps Script Web App for the DermaGlow "dermaglo-form" consultation form.
 *
 * Setup:
 * 1. Open your Google Sheet -> Extensions -> Apps Script.
 * 2. Paste this file's contents in as Code.gs.
 * 3. Deploy -> New deployment -> Type: Web app.
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the deployment URL and set it as GOOGLE_APPS_SCRIPT_URL in the
 *    Next.js app's environment (.env.local / hosting provider env vars).
 *    app/api/submissions/route.ts reads that URL via getSheetWebhookUrl().
 */

var SHEET_NAME = 'Submissions';
var HEADERS = ['Timestamp', 'Source', 'Name', 'Phone', 'Concern', 'URL', 'TeleCRM'];

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }
  return sheet;
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = getSheet_();

    var row = data.row && data.row.length ? data.row : [
      data.timestamp || new Date().toLocaleString(),
      data.source || 'dermaglo-form',
      data.name || '',
      data.phone || '',
      data.concern || '',
      data.pageUrl || data.url || '',
      data.telecrm || '',
    ];

    sheet.appendRow(row);

    return jsonResponse_({ success: true });
  } catch (err) {
    return jsonResponse_({ success: false, error: err.message });
  }
}

function doGet() {
  return jsonResponse_({ status: 'ok', message: 'DermaGlow submissions endpoint is live' });
}
