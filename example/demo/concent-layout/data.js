'use strict';
const Node = require('./node.js');
const Edge = require('./edge');
const Center = require('./center');

module.exports = {
  nodes: [{
    id: 'test1',
    name: '小蝴蝶',
    type: 'main',
    iconType: 'iconapplication',
    className: 'icon-background',
    Class: Center,
    degree: 10,
    size: 10,
  }, {
    id: 'test2',
    name: '自定义',
    type: 'prop',
    iconType: 'iconapplication',
    className: 'icon-background',
    Class: Node,
    degree: 3,
    size: 10,
  }, {
    id: 'test3',
    name: '事件',
    type: 'prop',
    iconType: 'iconapplication',
    className: 'icon-background',
    Class: Node,
    degree: 3,
    size: 10,
  }, {
    id: 'test4',
    name: '框选',
    type: 'prop',
    iconType: 'iconapplication',
    className: 'icon-background',
    Class: Node,
    degree: 3,
    size: 10,
  },
  {
    id: 'test5',
    name: '箭头',
    type: 'prop',
    iconType: 'iconapplication',
    className: 'icon-background',
    Class: Node,
    degree: 3,
    size: 10,
  }, {
    id: 'test6',
    name: '节点',
    type: 'prop',
    iconType: 'iconapplication',
    className: 'icon-background',
    Class: Node,
    degree: 3,
    size: 10,
  }, {
    id: 'test7',
    name: '锚点',
    type: 'prop',
    iconType: 'iconapplication',
    className: 'icon-background',
    Class: Node,
    degree: 3,
    size: 10,
  }, {
    id: 'test8',
    name: '线条',
    type: 'prop',
    iconType: 'iconapplication',
    className: 'icon-background',
    Class: Node,
    degree: 3,
    size: 10,
  }, {
    id: 'test9',
    name: '主题定制',
    type: 'prop',
    Class: Node,
    iconType: 'iconapplication',
    className: 'icon-background',
    degree: 3,
    size: 10,
  }, {
    id: 'test10',
    name: '连接节点',
    type: 'prop',
    iconType: 'iconapplication',
    className: 'icon-background',
    Class: Node,
    degree: 3,
    size: 10,
  }, {
    id: 'test11',
    name: '拖动',
    type: 'prop',
    iconType: 'iconapplication',
    className: 'icon-background',
    Class: Node,
    degree: 3,
    size: 10,
  }, {
    id: 'test12',
    name: '平移',
    type: 'prop',
    iconType: 'iconapplication',
    className: 'icon-background',
    Class: Node,
    degree: 3,
    size: 10,
  }, {
    id: 'test13',
    name: '缩放',
    type: 'prop',
    iconType: 'iconapplication',
    className: 'icon-background',
    Class: Node,
    degree: 3,
    size: 10,
  }, {
    id: 'test14',
    name: 'Minimap',
    type: 'model',
    iconType: 'iconapplication',
    className: 'icon-background',
    Class: Node,
    degree: 4,
    size: 50,
  }, {
    id: 'test15',
    name: 'Eedpoint',
    type: 'model',
    iconType: 'iconapplication',
    className: 'icon-background',
    Class: Node,
    degree: 4,
    size: 50,
  }, {
    id: 'test16',
    name: 'Edge',
    type: 'model',
    iconType: 'iconapplication',
    className: 'icon-background',
    Class: Node,
    degree: 4,
    size: 50,
  }, {
    id: 'test17',
    name: 'Node',
    type: 'model',
    iconType: 'iconapplication',
    className: 'icon-background',
    Class: Node,
    degree: 4,
    size: 50,
  }, {
    id: 'test18',
    name: 'Group',
    type: 'model',
    iconType: 'iconapplication',
    className: 'icon-background',
    Class: Node,
    degree: 4,
    size: 50,
  }, {
    id: 'test19',
    name: 'Canvas',
    type: 'model',
    iconType: 'iconapplication',
    className: 'icon-background',
    Class: Node,
    degree: 4,
    size: 50,
  },
  // {
  //   id: 'test20',
  //   name: 'Layout',
  //   type: '1',
  //   Class:Node,
  //   degree: 4,
  //   size: 10,
  // }
  ],
  edges: [{
    id: 'edge1',
    source: 'test1',
    target: 'test1',
    Class: Edge,
  }, {
    id: 'edge2',
    source: 'test1',
    target: 'test2',
    Class: Edge,
  }, {
    id: 'edge3',
    source: 'test1',
    target: 'test3',
    Class: Edge,
  }, {
    id: 'edge4',
    source: 'test1',
    target: 'test4',
    Class: Edge,
  }, {
    id: 'edge5',
    source: 'test1',
    target: 'test5',
    Class: Edge,
  }, {
    id: 'edge6',
    source: 'test1',
    target: 'test6',
    Class: Edge,
  }, {
    id: 'edge7',
    source: 'test1',
    target: 'test7',
    Class: Edge,
  }, {
    id: 'edge8',
    source: 'test1',
    target: 'test8',
    Class: Edge,
  }, {
    id: 'edge9',
    source: 'test1',
    target: 'test9',
    Class: Edge,
  }, {
    id: 'edge10',
    source: 'test1',
    target: 'test10',
    Class: Edge,
  }, {
    id: 'edge11',
    source: 'test1',
    target: 'test11',
    Class: Edge,
  }, {
    id: 'edge12',
    source: 'test1',
    target: 'test12',
    Class: Edge,
  }, {
    id: 'edge13',
    source: 'test1',
    target: 'test13',
    Class: Edge,
  }, {
    id: 'edge14',
    source: 'test1',
    target: 'test14',
    Class: Edge,
  }, {
    id: 'edge15',
    source: 'test1',
    target: 'test15',
    Class: Edge,
  }, {
    id: 'edge16',
    source: 'test1',
    target: 'test16',
    Class: Edge,
  }, {
    id: 'edge17',
    source: 'test1',
    target: 'test17',
    Class: Edge,
  }, {
    id: 'edge18',
    source: 'test1',
    target: 'test18',
    Class: Edge,
  }, {
    id: 'edge19',
    source: 'test1',
    target: 'test19',
    Class: Edge,
  }]
};
