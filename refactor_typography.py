import os
import re
import glob

# Mapping of HTML tags to Typography components
TAG_MAP = {
    'h1': 'TypographyH1',
    'h2': 'TypographyH2',
    'h3': 'TypographyH3',
    'h4': 'TypographyH4',
    'p': 'TypographyP',
    'blockquote': 'TypographyBlockquote',
    'code': 'TypographyInlineCode',
    'small': 'TypographySmall'
}

def process_file(filepath):
    # Don't modify the typography component itself or irrelevant files
    if "typography.tsx" in filepath or "SearchModal" in filepath and "ui" in filepath:
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    used_components = set()

    for tag, comp in TAG_MAP.items():
        # Match opening tags: <tag>, <tag className="...">, <tag\n...
        # Negative lookahead to ensure we don't match <path> when looking for <p>
        opening_pattern = rf'<{tag}(\s+[^>]*?)?>'
        # Match closing tags: </tag>
        closing_pattern = rf'</{tag}>'

        # Function to track if we made a replacement
        def repl_open(match):
            used_components.add(comp)
            attrs = match.group(1) or ''
            return f'<{comp}{attrs}>'

        def repl_close(match):
            used_components.add(comp)
            return f'</{comp}>'

        content = re.sub(opening_pattern, repl_open, content)
        content = re.sub(closing_pattern, repl_close, content)

    if original_content != content and used_components:
        # We need to add the import statement
        import_stmt = f"import {{ {', '.join(sorted(used_components))} }} from '@/components/ui/typography'\n"
        
        # Check if we already have an import for typography (unlikely but safe)
        if "@/components/ui/typography" not in content:
            # Find the last import and add this after it
            last_import_idx = content.rfind("import ")
            if last_import_idx != -1:
                # Find the end of the last import statement
                end_of_import = content.find("\n", last_import_idx)
                if end_of_import != -1:
                    content = content[:end_of_import+1] + import_stmt + content[end_of_import+1:]
                else:
                    content = import_stmt + content
            else:
                # No imports found, add at the top after 'use client' if present
                if content.startswith("'use client'") or content.startswith('"use client"'):
                    idx = content.find("\n")
                    content = content[:idx+1] + "\n" + import_stmt + content[idx+1:]
                else:
                    content = import_stmt + "\n" + content

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

def main():
    src_dir = "/Volumes/DATA/Vue.js/manhattan-plumbing/src"
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith(('.tsx', '.jsx')):
                filepath = os.path.join(root, file)
                process_file(filepath)

if __name__ == "__main__":
    main()
