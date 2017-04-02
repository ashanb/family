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

    var datascource = {
      'name': 'Lao Lao',
	  'id': '1',
	  'title': 'general manager',
	  'Partners': [{ 'id': '2', 'name': 'Harshi', 'title': 'Wife-Tester' }],
      'children': [
        { 'id': '11','name': 'Ashan', 'title': 'department manager',
          'children': [
            { 'id': '4','name': 'Li Jing Zai', 'title': 'senior engineer' },
            { 'id': '3','name': 'Li Xin', 'title': 'senior engineer',
              'children': [
                {'id': '5','name': 'To To', 'title': 'engineer' },
                {'id': '6','name': 'Fei Fei', 'title': 'engineer' },
                {'id': '7', 'name': 'Xuan Xuan', 'title': 'engineer' }
              ]
            }
          ]
        },
        { 'id': '8','name': 'Su Miao', 'title': 'department manager',
          'children': [
            {'id': '9','name': 'Pang Pang', 'title': 'senior engineer' },
            {'id': '10','name': 'Hei Hei', 'title': 'senior engineer',
              'children': [
                {'id': '11','name': 'Xiang Xiang', 'title': 'UE engineer' },
                {'id': '12','name': 'Dan Dan', 'title': 'engineer' },
                {'id': '13', 'name': 'Zai Zai', 'title': 'engineer' }
              ]
            }
          ]
        },
      ]
    };
	
		    $('#chart-container').orgchart({
      'data' : datascource,
      'nodeContent': 'title',
      'nodeID': 'id',
      'createNode': function($node, data) {
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