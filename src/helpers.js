const compose = (...funcs) => arg => funcs.reduce((result, func) => func(result), arg);

const strucutredPaths = tree => tree.sort()
  .map(path => {
    var formatPath = compose(removeExtraSlash, splitPath);
    return formatPath(path);
  });

const removeExtraSlash = string => string.substr(1);

const splitPath = string => string.split('/');

const empty = paths => paths.length === 0;

const isLastPath = (paths, index) => index === paths.length - 1;

const hierarchyTabulation = level => '\t'.repeat(level);

const stillRemainingItems = (index, paths) => index < paths.length - 1;

const isPathCompleted = (index, path) => index >= path.length;

const appendTree = (index, content) => {
  const tabulation = hierarchyTabulation(index);
  return '\n' + tabulation + content;
}

const pathHierarchyEqualsToNextOne = (paths, pathIndex, hierarchyIndex) =>
  paths[pathIndex][hierarchyIndex] === paths[pathIndex + 1][hierarchyIndex];

const canGoNextPathInHierarchy = (paths, pathIndex, hierarchyIndex) =>
  stillRemainingItems(pathIndex, paths) &&
  pathHierarchyEqualsToNextOne(paths, pathIndex, hierarchyIndex);

module.exports = {
  empty: empty,
  strucutredPaths: strucutredPaths,
  isLastPath: isLastPath,
  stillRemainingItems: stillRemainingItems,
  isPathCompleted: isPathCompleted,
  canGoNextPathInHierarchy: canGoNextPathInHierarchy,
  appendTree: appendTree
};

