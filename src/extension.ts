/**
 * extension.ts
 * 
 * @author CismonX <admin@cismon.net>
 * @license MIT
 */

import * as vscode from 'vscode';
import ContextMapping from './context_mapping';
import Diagnosis from './diagnosis';
import Logger from './logger';
import Options from './options';
import PreviewContext from './context/preview';
import CompletionItemProvider from './providers/completion_item';
import DocumentSymbolProvider from './providers/document_symbol';
import FoldingRangeProvider from './providers/folding_range';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        ContextMapping.instance, Diagnosis.instance, Logger.instance, Options.instance,
        vscode.workspace.onDidChangeTextDocument(ContextMapping.onDocumentUpdate),
        vscode.workspace.onDidSaveTextDocument(ContextMapping.onDocumentSave),
        vscode.workspace.onDidCloseTextDocument(ContextMapping.onDocumentClose),
        vscode.workspace.onDidChangeConfiguration(Options.clear),
        vscode.commands.registerTextEditorCommand('texinfo.showPreview', PreviewContext.showPreview),
        vscode.languages.registerCompletionItemProvider('texinfo', new CompletionItemProvider(), '@'),
        vscode.languages.registerDocumentSymbolProvider('texinfo', new DocumentSymbolProvider()),
        vscode.languages.registerFoldingRangeProvider('texinfo', new FoldingRangeProvider()),
    );
}
