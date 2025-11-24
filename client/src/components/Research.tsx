import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ZoomIn,
  ZoomOut,
  Download,
  ChevronLeft,
  ChevronRight,
  FileText,
  GraduationCap
} from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  file: string;
  title: string;
  showAbstract?: boolean;
}

function PDFViewer({ file, title, showAbstract }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [loading, setLoading] = useState<boolean>(true);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
  }

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 2.5));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.5));

  const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages));

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = file;
    link.download = title.replace(/\s+/g, '_') + '.pdf';
    link.click();
  };

  return (
    <div className="space-y-4">
      <div className="sticky top-20 z-10 bg-background/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
@@ -99,112 +109,141 @@ function PDFViewer({ file, title, showAbstract }: PDFViewerProps) {
              data-testid="button-pdf-zoom-in"
              aria-label="Zoom in"
            >
              <ZoomIn size={20} />
            </Button>
          </div>

          <Button
            variant="default"
            onClick={downloadPDF}
            className="gap-2"
            data-testid="button-pdf-download"
          >
            <Download size={18} />
            Download
          </Button>
        </div>
      </div>

      <div className="flex justify-center bg-muted/30 rounded-lg p-8 min-h-[600px]">
        {loading && (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
          </div>
        )}
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={null}
          className="max-w-full"
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            className="shadow-lg"
          />
        </Document>
      </div>
    </div>
  );
}

export function Research() {
  return (
    <section id="research" className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Documents & Research
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional resume and published research paper
          </p>
        </div>

        <Tabs defaultValue="resume" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="resume" className="gap-2" data-testid="tab-resume">
              <FileText size={18} />
              Resume
            </TabsTrigger>
            <TabsTrigger value="research" className="gap-2" data-testid="tab-research-paper">
              <GraduationCap size={18} />
              Research Paper
            </TabsTrigger>
          </TabsList>

          <TabsContent value="resume">
            <PDFViewer
              file={`${import.meta.env.BASE_URL}attached_assets/resume.pdf`}
              title="Keshav_Kotteswaran_Resume"
            />
          </TabsContent>

          <TabsContent value="research">
            <Card className="p-6 md:p-8 mb-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Modifying NIH3T3 Cell Migration to Enhance Wound Healing
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                NORTHEASTERN UNIVERSITY • BIOE 4792 Capstone Design Report (CDR)
              </p>
              <p className="text-sm font-semibold text-primary mb-2">
                Authors: Christopher Schmidt, Jonathan Kim, Victoria Rivera, Harris Goodwin,
                Jacob Miller, Keshav Kotteswaran
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Faculty Advisor: Narges Yazdani | April 21, 2024
              </p>
              <p className="text-foreground leading-relaxed">
                This capstone project developed a comprehensive protocol for modifying and testing
                NIH 3T3 fibroblasts to optimize cellular migration for wound healing applications.
                The research involved PDGFR gene transfection, chemotactic analysis, and statistical
                modeling, achieving a validated 25% improvement in cellular mobility. The study
                demonstrates significant potential for advancing regenerative medicine and tissue
                engineering applications.
              </p>
            </Card>

            <PDFViewer
              file={`${import.meta.env.BASE_URL}attached_assets/capstone.pdf`}
              title="NIH3T3_Cell_Migration_Research"
              showAbstract={true}
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
