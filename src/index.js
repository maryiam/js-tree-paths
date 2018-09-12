const helpers = require('./helpers');
const { empty,
  isLastPath,
  appendTree,
  isPathCompleted,
  canGoNextPathInHierarchy,
  strucutredPaths } = helpers;


const renderTree = (paths => {
  const hierarchyIndex = 0;
  let tree = '';

  const buildTreeHierarchy = (paths, hierarchyIndex) => {
    if (empty(paths)) {
      return tree;
    }

    let pathIndex = 0;
    const hierarchyLevelContent = paths[pathIndex][hierarchyIndex];

    if (isLastPath(paths, pathIndex)) {
      if (!hierarchyLevelContent) {
        return;
      }

      tree += appendTree(hierarchyIndex, hierarchyLevelContent);

      if (!isPathCompleted(hierarchyIndex, paths[pathIndex])) {
        buildTreeHierarchy(paths, hierarchyIndex + 1);
      }

      return;
    }

    while (canGoNextPathInHierarchy(paths, pathIndex, hierarchyIndex)) {
      pathIndex += 1;
    }

    if (hierarchyLevelContent) {
      tree += appendTree(hierarchyIndex, hierarchyLevelContent)
    }

    buildTreeHierarchy(paths.slice(0, pathIndex + 1), hierarchyIndex + 1);
    buildTreeHierarchy(paths.slice(pathIndex + 1, paths.length), hierarchyIndex);

    return tree;
  }

  return paths ? buildTreeHierarchy(strucutredPaths(paths), hierarchyIndex) : null;
});

module.exports = renderTree;