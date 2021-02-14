
'use strict';

import node from './base_node.jsx';
import $ from 'jquery';

class Phone extends Node {
  constructor(...args) {
    super(...args);
  }
  genLogo = () => {
    return $('<i class="newIconfont iconapplication"></i>');
  }
}

module.exports = Phone;
