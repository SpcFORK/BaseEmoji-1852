const baseEmoji = {

(globalThis?.window) && (
  (window as any).baseEmoji = baseEmoji,
  (window as any).module = baseEmoji
)

module.exports = baseEmoji;