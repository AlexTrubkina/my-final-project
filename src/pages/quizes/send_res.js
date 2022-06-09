import { GoogleSpreadsheet } from "google-spreadsheet";

const SPREADSHEET_ID = '1MStKo8gK0zis3kTUdR0ORn9aS5V5Z2cfDtorP0MyZmo';
const SHEET_ID = '928961147';
const CLIENT_EMAIL = 'forresults@forresultoftest.iam.gserviceaccount.com';
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCsPV8WmJKDQr9R\nzIld8VJsd8kzrOjJSqTBMk5G4gLzY4k5wBJvcwy9Z6QB/KzPzUMNvND9JmbT8Efd\nYu0cfhls8X0yVfFIONzyTI1/S7VnvJXCGGedMqlcmTLQmYkQHA4+iOnXiCjVk9eZ\nmJyPjPjNh39+4/KGFRCnnV0gHmFf/oNldScfs6Njz2aaPsLZoBPvZGD9mnJlqYPn\nPJKL9TAlmsJ87LwXWNz8l/mYyVDtzh0KafOGcjN5dQSUxH+iVZW2dcr20To15RYV\nnpvLmvlrleNotJov8SWAXKhb/5vL2zlbjEPiyaKJF9k3C74knKILf74w60oZZh5g\nI6qccm6XAgMBAAECggEAVLFay/Aa/ws3qz/Bfh2XM3nVSCEqWCxphgw3/FfPLqHP\njMOa7Q1sAshvF4EI8qdSZPNm6kvTPTzGAaDOyfdhhjXao4EqAyLe1g/5ddIi8c8D\n7qx0apJKQBuepn8QrAi3ol1NautrdNXdKowl09p0Tw/lC96HVxINnfXdoFj/9aSQ\nl8JzxBq6cWSm90Luby/msncUaIFiDOJhdwDDVpEYhuUFl7C/cHFDrmzrclhmdEIT\nAc/mRaWaSgh07+I8e99RlbRI4YOh24k/qplT2EuL904hNBqmOJ+lQu2z8INMUIUJ\nHIUT8VyRerWU2Fsgg9r4y5yEgosvsna8tqeDOfWR0QKBgQDYzK/m0ks8QWJprmow\nzBUO7f1e2rPt5F62oNRKeOBJKjbgApKU4uKCtDPj8ulngdR2qIKGhQ6LFbxrFIoE\nsMnmpjg9nVI44LVJ4TKe4fn/lCvLUwJFO4Lk/rFiGBiGZ3vIbAKNyL2Gy4oX6NrX\nS3MkVwGEQwCgObKv1hbKKd+MZwKBgQDLYhRdj0uqPZj1kNQVmdf7bRHHKMTOhHFK\ntUKm6FnuW6vahzwSdCHLqIdXVLpLY+BERU5oTVzn5qDuPrd5+jvnA1MSYr4rS7Nh\nfGwowC6HQhL0wHpycuN7l/LFjfV6wFN26cLZV4ambMhNVc02mTNuiQhnUi0zZUGb\nxPcffM+uUQKBgDu0+4jFR8UbeMAEMeioe/A1qP7zmnQc3dzMJEsySQq9XomJC9eH\nOLyoZlYT8yX3goz/UZs8j8nMPaz75hrumVw1UO3fIuLZN/RV2fwZ3iD+LKV9gfWR\nMzZf0nhijHaPj26eGIH11ASIj8qP7Z03gUlz0M4dKdH2sfhtLK+WoqNnAoGBAKQL\nlzujwjctefvQdpB5x3EAF4/ZfWzJ/QtySrGPxkHw5RvdaoHD9CJt68RwDdeTVqga\nctTEWcSfDH0+TwVu5fQ+hTnWNWd8ptJh5me0I5NroxiRS/KWYpAlDmd0SmVZTbkj\nccuWwn/oTGO8akq4pXhpxUJ5UQYcjR/UbjOSm30RAoGBALSb5f6b73Yob2hgiS9v\nTtwRpMVdgX+9PHkvQzf+PbUgTfHcO+JCP+Fp1vH58jFA9mbsUWxnK6Ev2JcbRsIW\n/E1oKrlHkgngQx2xKMMv1AZggsVYSPjVFaoffY03/zC6z+OkQF0ft3LhJLBAavbo\n/COWkZRtat6+FSAmsbkb0bcZ\n-----END PRIVATE KEY-----\n";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const appendSpreadsheet = async (row) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });
    // loads document properties and worksheets
    await doc.loadInfo();
    console.log(doc.title);


    const sheet = doc.sheetsById[SHEET_ID];
    const result = await sheet.addRow(row);
  } catch (e) {
    console.error('Error: ', e);
  }
};


export default appendSpreadsheet;
