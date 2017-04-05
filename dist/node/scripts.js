'use strict';

(function($){

  function filterNodes(keyWord) {
    if(!keyWord.length) {
      window.alert('Please type key word firstly.');
      return;
    } else {
      var $chart = $('.orgchart');
      // disalbe the expand/collapse feture
      $chart.addClass('noncollapsable');
      // distinguish the matched nodes and the unmatched nodes according to the given key word
      $chart.find('.node').filter(function(index, node) {
          return $(node).text().toLowerCase().indexOf(keyWord) > -1;
        }).addClass('matched')
        .closest('table').parents('table').find('tr:first').find('.node').addClass('retained');
      // hide the unmatched nodes
      $chart.find('.matched,.retained').each(function(index, node) {
        $(node).removeClass('slide-up')
          .closest('.nodes').removeClass('hidden')
          .siblings('.lines').removeClass('hidden');
        var $unmatched = $(node).closest('table').parent().siblings().find('.node:first:not(.matched,.retained)')
          .closest('table').parent().addClass('hidden');
        $unmatched.parent().prev().children().slice(1, $unmatched.length * 2 + 1).addClass('hidden');
      });
      // hide the redundant descendant nodes of the matched nodes
      $chart.find('.matched').each(function(index, node) {
        if (!$(node).closest('tr').siblings(':last').find('.matched').length) {
          $(node).closest('tr').siblings().addClass('hidden');
        }
      });
    }
  }

  function clearFilterResult() {
    $('.orgchart').removeClass('noncollapsable')
      .find('.node').removeClass('matched retained')
      .end().find('.hidden').removeClass('hidden')
      .end().find('.slide-up, .slide-left, .slide-right').removeClass('slide-up slide-right slide-left');
  }

  $(function() {

    var map = new ol.Map({
      layers: [
        new ol.layer.Tile({
          source: new ol.source.Stamen({
            layer: 'watercolor'
          }),
          preload: 4
        }),
        new ol.layer.Tile({
          source: new ol.source.Stamen({
            layer: 'terrain-labels'
          }),
          preload: 1
        })
      ],
      target: 'pageBody',
      view: new ol.View({
        center: ol.proj.transform([-87.6297980, 41.8781140], 'EPSG:4326', 'EPSG:3857'),
        zoom: 10
      })
    });

    $('body').prepend(map.getViewport());    


    var datascource = {
    'name': 'A.H.M.C.V.P Bakmeedeniya',
	  'id': '1',
	  'title': 'Entrepreneur',
    'position': [-87.6297980, 41.8781140],
      'children': [
        { 'id': '11','name': 'R.M Muthumanike', 'title': 'Entrepreneur', 'position': [-83.0457540, 42.3314270],
          'children': [
            { 'id': '4','name': 'Li Jing Zai', 'title': 'Entrepreneur', 'position': [-81.6943610, 41.4993200] },
            { 'id': '3','name': 'Li Xin', 'title': 'Entrepreneur',
              'children': [
                {'id': '5','name': 'To To', 'title': 'Entrepreneur' },
                {'id': '6','name': 'Fei Fei', 'title': 'Entrepreneur' },
                {'id': '7', 'name': 'Xuan Xuan', 'title': 'Entrepreneur' }
              ]
            }
          ]
        }
      ]
    };
	
 $('#chart-container').orgchart({
      'data' : datascource,
      'nodeContent': 'title',
      'nodeID': 'id',
      'createNode': function($node, data) {
          $node.on('click', function() {
          var view = map.getView();
          var duration = 2000;
          var start = +new Date();
          var pan = ol.animation.pan({
            duration: duration,
            source:  view.getCenter(),
            start: start
          });
          var bounce = ol.animation.bounce({
            duration: duration,
            resolution: 4 * view.getResolution(),
            start: start
          });
          map.beforeRender(pan, bounce);
          view.setCenter(ol.proj.transform(data.position, 'EPSG:4326', 'EPSG:3857'));
        });
        var secondMenuIcon = $('<i>', {
          'class': 'fa fa-info-circle second-menu-icon',
          click: function() {
            $(this).siblings('.second-menu').toggle();
          }
        });
        var secondMenu = '<div class="second-menu"><img class="avatar" src="../img/avatar/' + data.id + '.jpg"></div>';
        $node.append(secondMenuIcon).append(secondMenu);
      }
    });


    $('#btn-filter-node').on('click', function() {
      filterNodes($('#key-word').val());
    });

    $('#btn-cancel').on('click', function() {
      clearFilterResult();
    });

    $('#key-word').on('keyup', function(event) {
      if (event.which === 13) {
        filterNodes(this.value);
      } else if (event.which === 8 && this.value.length === 0) {
        clearFilterResult();
      }
    });
	


  });

})(jQuery);