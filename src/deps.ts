import { type FilePath } from "./lib/src/types";

export {
    addIcon, App, debounce, Editor, FuzzySuggestModal, MarkdownRenderer, MarkdownView, Modal, Notice, Platform, Plugin, PluginSettingTab, requestUrl, sanitizeHTMLToDom, Setting, stringifyYaml, TAbstractFile, TextAreaComponent, TFile, TFolder,
    parseYaml, ItemView, WorkspaceLeaf
} from "obsidian";
export type { DataWriteOptions, PluginManifest, RequestUrlParam, RequestUrlResponse, MarkdownFileInfo } from "obsidian";
import {
    normalizePath as normalizePath_
} from "obsidian";
const normalizePath = normalizePath_ as <T extends string | FilePath>(from: T) => T;
export { normalizePath }
export { type Diff, DIFF_DELETE, DIFF_EQUAL, DIFF_INSERT, diff_match_patch } from "diff-match-patch";