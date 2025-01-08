// main.js

// --- jQuery ---
import $ from 'jquery';
window.$ = $;
window.jQuery = $;

// --- Bootstrap ---
import 'bootstrap'; 
// Enthält Bootstrap JS; Falls du die Popper-Tooltip-Funktionen brauchst, installiere auch `@popperjs/core`.

// --- DataTables ---
import 'datatables.net';       // Kernfunktion
import 'datatables.net-bs5';   // Styling für Bootstrap 5
// DataTables hängt meist an jQuery, daher es ist gut, jQuery global zu haben.

// --- Lodash ---
import _ from 'lodash';
window._ = _;

// --- Chart.js ---
import Chart from 'chart.js/auto'; 
window.Chart = Chart;

// --- patternomaly (Muster für Chart.js) ---
import pattern from 'patternomaly'; 
window.pattern = pattern;

// --- autotrack ---
import 'autotrack';

// --- html2canvas & file-saver ---
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
window.html2canvas = html2canvas;
window.saveAs = saveAs;

// Hier kannst du deinen eigenen JS-Code schreiben oder importieren
console.log('main.js loaded');
