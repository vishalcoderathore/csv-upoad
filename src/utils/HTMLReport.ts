import jsPDF from 'jspdf';
import 'jspdf-autotable';

import { OutputTargetInterface } from "../types/OutputTargetInterface";

export class HTMLReport implements OutputTargetInterface {
  /**
   * Prints the given report.
   * @param report - The report to print.
   */
  print(report: string): void {
    this.downloadPDF(report);
  }

  /**
   * Downloads the given HTML as a PDF.
   * @param html - The HTML to download as a PDF.
   */
  private downloadPDF(html: string): void {
    const doc = new jsPDF();
    doc.text(html, 10, 10);
    doc.save("report.pdf");
  }
}
