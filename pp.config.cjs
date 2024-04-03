const indexSections = [
  {section: 'slider', misMatchThreshold: 3},
  {section: 'about', misMatchThreshold: 3},
  {section: 'programs', misMatchThreshold: 3},
  {section: 'grant', misMatchThreshold: 3},
  {section: 'news', misMatchThreshold: 3},
  {section: 'FAQ', misMatchThreshold: 3},
  {section: 'reviews', misMatchThreshold: 3},
  {section: 'contacts', misMatchThreshold: 3},
  {section: 'form', misMatchThreshold: 3},
  {section: 'footer', misMatchThreshold: 3}
];


module.exports = {
  "id": "internship test-pp",
  "viewports": [
    {
      "label": "desktop",
      "width": 1440,
      "height": 800,
    },
    {
      "label": "tablet",
      "width": 768,
      "height": 800,
    },
    {
      "label": "mobile",
      "width": 320,
      "height": 800,
    },
  ],
  "onReadyScript": "onReady.cjs",
  "onBeforeScript": "onBefore.cjs",
  "resembleOutputOptions": {
    "ignoreAntialiasing": true,
    "errorType": "movementDifferenceIntensity",
    "transparency": 0.3,
    scaleToSameSize: false
  },
  "scenarios": [
    ...indexSections.map(({section, misMatchThreshold}) => ({
      "label": `${section}`,
      "url": "http://localhost:3000/index.html",
      "referenceUrl": "./figma/index.html",
      selectors: [`[data-test="${section}"]`],
      misMatchThreshold: misMatchThreshold || 5,
      requireSameDimensions: true,
      delay: 500
    })),
  ],
  fileNameTemplate: '{scenarioLabel}_{viewportLabel}',
  "paths": {
    "bitmaps_reference": "bitmaps_reference/test-pp",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "engine_scripts",
    "html_report": "backstop_data/html_report",
    "json_report": "backstop_data/json_report",
  },
  "report": ["browser", "json"],
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"],
    "gotoParameters": {"waitUntil": ["load", "networkidle0"], timeout: 10000},
  },
  "asyncCaptureLimit": 10,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
}
