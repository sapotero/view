window.onload = function() {
  
  var sidebar = new Ractive({
    el: '#sidebar',
    template: '#sidebarTemplate',
    data: {
      names: [
        { name: 'test' },
        { name: 'test' },
        { name: 'test' },
        { name: 'test' },
        { name: 'test' }
      ]
    }
  });

  var main = new Ractive({
    el: '#main',
    template: '#mainTemplate',
    data: {}
  });

};