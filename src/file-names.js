/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let mem = new Map();
  for (item of names) {
    if (mem.has(item)) {
      let k = mem.get(item);
      mem.set(item, k + 1)
      mem.set(`${item}(${k})`, 1)
    } else {
      mem.set(item, 1)
    }
  }

  return Array.from(mem.keys());
}

module.exports = {
  renameFiles
};

console.dir(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']))