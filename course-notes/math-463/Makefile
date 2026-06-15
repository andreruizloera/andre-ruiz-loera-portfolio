# Makefile for compiling Math 463 notes

LATEX = pdflatex
MAIN = math463-notes
OUTPUT = math463-notes.pdf

.PHONY: all clean view

all: $(OUTPUT)

$(OUTPUT): $(MAIN).tex
	$(LATEX) $(MAIN).tex
	$(LATEX) $(MAIN).tex

clean:
	rm -f *.aux *.log *.out *.toc *.synctex.gz *.fdb_latexmk *.fls

view: $(OUTPUT)
	open $(OUTPUT)

help:
	@echo "Available targets:"
	@echo "  all    - Compile the PDF (default)"
	@echo "  clean  - Remove auxiliary files"
	@echo "  view   - Compile and open the PDF"
	@echo "  help   - Show this message"
