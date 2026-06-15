# Course Notes

LaTeX source files and compiled PDFs for course notes and technical commentary.

## Structure

- `math-463/` - Mathematical Statistics (Math 463)
- `sisyphus/` - Commentary on The Myth of Sisyphus by Albert Camus
- `neetcode-150/` - NeetCode 150 Problem Solutions & Commentary

## Working with LaTeX in VS Code

### Viewing PDF Preview

1. Open any `.tex` file in VS Code
2. Press **`Cmd+Alt+V`** to open PDF preview side-by-side
3. Or click the preview icon in the top right corner
4. The preview updates automatically when you save

### Building PDFs

**Auto-compile (Recommended):**
- LaTeX Workshop auto-compiles on save

**Manual Build:**
- Press `Cmd+Alt+B`
- Or use the terminal: `cd math-463 && make`

### Shortcuts

- `Cmd+Alt+B` - Build LaTeX project
- `Cmd+Alt+V` - View PDF in VS Code (split view)
- `Cmd+Alt+J` - View PDF in external viewer

## Adding to Portfolio Website

The compiled PDFs in these directories can be:
1. Linked directly for download
2. Embedded using a PDF viewer component
3. Referenced from the Reading Notes page
