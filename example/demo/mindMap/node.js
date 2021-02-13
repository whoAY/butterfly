'use strict';

// const Node = require('../../../index.js').TreeNode;
import {Node} from 'butterfly-dag';
const $ = require('jquery');

class BaseNode extends Node {
  constructor(opts) {
    super(opts);
  }

  draw = (opts) => {
    let container = $('<div class="mind-map-node"></div>')
      .css('top', opts.top)
      .css('left', opts.left)
      .attr('id', opts.id);
    let titleDom = $(`<div class="title">${opts.options.title}<div>`);

    container.append(titleDom);

    return container[0];
  }
}

module.exports = BaseNode;
