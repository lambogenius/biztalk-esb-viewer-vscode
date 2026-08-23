# BizTalk ESB Viewer

[![Source on GitHub](https://img.shields.io/badge/source-GitHub-181717?logo=github)](https://github.com/lambogenius/biztalk-esb-viewer-vscode)

A local-first, read-only VS Code custom editor for exported BizTalk ESB itinerary and configuration XML.

## Features

- Opens exported `.xml` and `.esb` files through **Open With...**.
- Loads the document text into a dedicated webview.
- Highlights the XML for easier review of itineraries and message flow definitions.
- Refreshes automatically when the underlying file changes.
- Keeps ESB definitions local; the extension makes no network calls.

## Install locally

Source code: [GitHub repository](https://github.com/lambogenius/biztalk-esb-viewer-vscode)

```powershell
npm run package:vsix
code --install-extension artifacts/biztalk-esb-viewer.vsix --force
```

Reload VS Code, open an ESB XML file, choose **Open With...**, and select **BizTalk ESB Viewer**.
