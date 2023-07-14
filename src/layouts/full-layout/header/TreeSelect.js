import React from 'react';

import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import TreeView from '@mui/lab/TreeView';
import { alpha, styled } from '@mui/material/styles';

import FeatherIcon from 'feather-icons-react';

const StyledTreeItem = styled((props) => <TreeItem {...props} />)(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    '& .close': {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

function MinusSquare(props) {
  return (
    <>
      <FeatherIcon icon="folder-minus" style={{ width: 15, height: 15 }} {...props} />
    </>
  );
}

function PlusSquare(props) {
  return (
    <>
      <FeatherIcon icon="folder-plus" style={{ width: 15, height: 15 }} {...props} />
    </>
  );
}

function CloseSquare(props) {
  return (
    <>
      <FeatherIcon icon="folder" style={{ width: 15, height: 15 }} {...props} />
    </>
  );
}

const TreeSelect = () => {
  return (
    <div className="wer">
      <div className="abs">
        <TreeView
          defaultExpanded={['']}
          defaultCollapseIcon={<MinusSquare />}
          defaultExpandIcon={<PlusSquare />}
          defaultEndIcon={<CloseSquare />}
          sx={{ flexGrow: 1, minWidth: 200, background: '#fff', p: 1 }}
        >
          <StyledTreeItem nodeId="1" label="Item">
            <StyledTreeItem nodeId="2" label="SubItem" />
            <StyledTreeItem nodeId="3" label="SubItem">
              <StyledTreeItem nodeId="6" label="Hello" />
              <StyledTreeItem nodeId="7" label="Subitem">
                <StyledTreeItem nodeId="9" label="Child" />
                <StyledTreeItem nodeId="10" label="Child" />
                <StyledTreeItem nodeId="11" label="Child" />
              </StyledTreeItem>
              <StyledTreeItem nodeId="8" label="Hello" />
            </StyledTreeItem>
            <StyledTreeItem nodeId="4" label="World" />
            <StyledTreeItem nodeId="5" label="Something" />
          </StyledTreeItem>
        </TreeView>
      </div>
    </div>
  );
};

export default TreeSelect;
