
const express = require('express');
const openai = require('openai');
const PDFDocument = require('pdfkit');

const app = express();

const client = new openai.OpenAI('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');


