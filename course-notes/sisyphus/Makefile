# Makefile for Sisyphus Commentary LaTeX document

# Main document name (without .tex extension)
DOC = sisyphus-commentary

# LaTeX compiler
LATEX = pdflatex

# Viewer (macOS)
VIEWER = open

# Default target
all: $(DOC).pdf

# Compile PDF (run twice for TOC and references)
$(DOC).pdf: $(DOC).tex
	$(LATEX) $(DOC).tex
	$(LATEX) $(DOC).tex

# View the PDF
view: $(DOC).pdf
	$(VIEWER) $(DOC).pdf

# Clean auxiliary files
clean:
	rm -f $(DOC).aux $(DOC).log $(DOC).out $(DOC).toc $(DOC).fdb_latexmk $(DOC).fls $(DOC).synctex.gz

# Clean everything including PDF
cleanall: clean
	rm -f $(DOC).pdf

# Force rebuild
rebuild: cleanall all

.PHONY: all view clean cleanall rebuild
