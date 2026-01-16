const editDiv = document.querySelector(".editor");
const boldBtn = document.querySelector(".bold");

boldBtn.addEventListener("click", handleBoldText);

function handleBoldText() {
  const range = getRangeInsideEditor(editDiv);
  if (!range) return;
  if (isBoldActive(range)) {
    removeBold(range);
  } else {
    applyBold(range);
  }
}

function getRangeInsideEditor(editor) {
  const sel = window.getSelection();

  if (!sel || sel.rangeCount === 0) return null;

  const range = sel.getRangeAt(0);

  if (range.collapsed) return null;

  if (!editor.contains(range.commonAncestorContainer)) return null;

  return range;
}

function applyBold(range) {
  const extracted = range.extractContents();
  const wrapper = document.createElement("strong");
  wrapper.appendChild(extracted);

  range.insertNode(wrapper);
  range.setStartAfter(wrapper);

  // 3. Collapse to cursor
  range.collapse(true);

  // 4. Update browser selection
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

function removeBold(range) {
  let node = range.startContainer;

  if (node.nodeType === Node.TEXT_NODE) {
    node = node.parentNode;
  }

  while (node && node !== editDiv) {
    if (
      node.style?.fontWeight === "bold" ||
      node.tagName === "B" ||
      node.tagName === "STRONG"
    ) {
      unwrap(node);
      break;
    }
    node = node.parentNode;
  }
}

function unwrap(node) {
  const parent = node.parentNode;
  while (node.firstChild) {
    parent.insertBefore(node.firstChild, node);
  }
  parent.removeChild(node);
}

function isBoldActive(range) {
  let node = range.startContainer;

  if (node.nodeType === Node.TEXT_NODE) {
    node = node.parentNode;
  }

  while (node && node !== editDiv) {
    if (
      node.style?.fontWeight === "bold" ||
      node.tagName === "B" ||
      node.tagName === "STRONG"
    ) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}
