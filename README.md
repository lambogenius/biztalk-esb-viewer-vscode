# BizTalk ESB Viewer

A local-first, read-only VS Code custom editor for exported BizTalk ESB itinerary and configuration XML.

## Features

- Opens exported `.xml` and `.esb` files through **Open With...**.
- Loads the document text into a dedicated webview.
- Highlights the XML for easier review of itineraries and message flow definitions.
- Refreshes automatically when the underlying file changes.
- Keeps ESB definitions local; the extension makes no network calls.

## Install locally

```powershell
npm run package:vsix
code --install-extension artifacts/biztalk-esb-viewer.vsix --force
```

Reload VS Code, open an ESB XML file, choose **Open With...**, and select **BizTalk ESB Viewer**.
