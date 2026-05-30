// Public SDK text chunking, Markdown rendering, and delivery sanitization helpers.
import { chunkTextByBreakResolver } from "../shared/text-chunking.js";

/** Chunk outbound text while preferring newline boundaries over spaces. */
export function chunkTextForOutbound(text: string, limit: number): string[] {
  return chunkTextByBreakResolver(text, limit, (window) => {
    const lastNewline = window.lastIndexOf("\n");
    const lastSpace = window.lastIndexOf(" ");
    return lastNewline > 0 ? lastNewline : lastSpace;
  });
}

/** Markdown intermediate representation parsing and slicing helpers. */
export {
  chunkMarkdownIR,
  markdownToIR,
  markdownToIRWithMeta,
  sliceMarkdownIR,
  type MarkdownIR,
  type MarkdownLinkSpan,
  type MarkdownParseOptions,
  type MarkdownStyle,
  type MarkdownStyleSpan,
  type MarkdownTableMeta,
} from "../markdown/ir.js";
/** Render-aware Markdown chunking helpers that preserve output limits. */
export {
  renderMarkdownIRChunksWithinLimit,
  type RenderMarkdownIRChunksWithinLimitOptions,
} from "../markdown/render-aware-chunking.js";
/** Markdown renderer and style marker contracts for channel delivery. */
export {
  renderMarkdownWithMarkers,
  type RenderLink,
  type RenderOptions,
  type RenderStyleMap,
  type RenderStyleMarker,
} from "../markdown/render.js";
/** Converts Markdown tables for channel-safe delivery. */
export { convertMarkdownTables } from "../markdown/tables.js";
/** Assistant-visible text sanitizers for stripping internal scaffolding. */
export {
  sanitizeAssistantVisibleText,
  sanitizeAssistantVisibleTextWithOptions,
  sanitizeAssistantVisibleTextWithProfile,
  stripAssistantInternalScaffolding,
  stripToolCallXmlTags,
  type AssistantVisibleTextSanitizerProfile,
} from "../shared/text/assistant-visible-text.js";
/** Auto-linked file reference detection helpers. */
export {
  FILE_REF_EXTENSIONS_WITH_TLD,
  isAutoLinkedFileRef,
} from "../shared/text/auto-linked-file-ref.js";
/** Code-region helpers used when stripping or chunking Markdown. */
export { findCodeRegions, isInsideCode, type CodeRegion } from "../shared/text/code-regions.js";
/** Reasoning tag stripping helpers for visible reply text. */
export {
  stripReasoningTagsFromText,
  type ReasoningTagMode,
  type ReasoningTagTrim,
} from "../shared/text/reasoning-tags.js";
/** Strips Markdown formatting for plain-text channel fallbacks. */
export { stripMarkdown } from "../shared/text/strip-markdown.js";
/** Sanitizes terminal text before display or delivery. */
export { sanitizeTerminalText } from "../terminal/safe-text.js";
/** System-message marker helpers for internal transcript annotations. */
export { SYSTEM_MARK, hasSystemMark, prefixSystemMessage } from "../infra/system-message.ts";
/** Inline directive stripping helpers for display and delivery paths. */
export {
  stripInlineDirectiveTagsForDelivery,
  stripInlineDirectiveTagsForDisplay,
  stripInlineDirectiveTagsFromMessageForDisplay,
  type DisplayMessageWithContent,
  type InlineDirectiveParseResult,
} from "../utils/directive-tags.js";
/** Generic fixed-size item chunking helper. */
export { chunkItems } from "../utils/chunk-items.js";
