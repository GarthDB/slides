#!/bin/bash

# PDF to Text Extraction Script
# Usage: ./extract_pdfs.sh [directory_with_pdfs]

PDF_DIR=${1:-.}  # Use provided directory or current directory
OUTPUT_DIR="extracted_texts"

echo "🔍 Looking for PDFs in: $PDF_DIR"

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Check if pdftotext is available
if command -v pdftotext &> /dev/null; then
    echo "✅ Using pdftotext (poppler-utils)"
    
    # Find and process all PDFs
    find "$PDF_DIR" -name "*.pdf" -type f | while read -r pdf_file; do
        filename=$(basename "$pdf_file" .pdf)
        output_file="$OUTPUT_DIR/${filename}.txt"
        
        echo "📄 Processing: $pdf_file"
        pdftotext "$pdf_file" "$output_file"
        
        if [ -f "$output_file" ]; then
            echo "✅ Created: $output_file"
        else
            echo "❌ Failed: $pdf_file"
        fi
    done
    
elif python3 -c "import PyPDF2" &> /dev/null; then
    echo "✅ Using Python PyPDF2"
    
    python3 << 'EOF'
import PyPDF2
import os
import glob
import sys

pdf_dir = sys.argv[1] if len(sys.argv) > 1 else '.'
output_dir = 'extracted_texts'

for pdf_file in glob.glob(f"{pdf_dir}/*.pdf"):
    try:
        with open(pdf_file, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            text = ""
            for page in reader.pages:
                text += page.extract_text() + "\n"
            
            filename = os.path.basename(pdf_file).replace('.pdf', '.txt')
            output_file = os.path.join(output_dir, filename)
            
            with open(output_file, 'w', encoding='utf-8') as output:
                output.write(text)
            print(f"✅ Created: {output_file}")
    except Exception as e:
        print(f"❌ Failed {pdf_file}: {e}")
EOF

else
    echo "❌ No PDF extraction tool found!"
    echo "Install one of:"
    echo "  brew install poppler          # for pdftotext"
    echo "  pip install PyPDF2           # for Python extraction"
    exit 1
fi

echo ""
echo "🎉 Extraction complete! Text files are in: $OUTPUT_DIR"
echo "📁 You can now read these files and share content with the AI"

