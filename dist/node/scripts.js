'use strict';

(function ($) {

  function filterNodes(keyWord) {
    if (!keyWord.length) {
      window.alert('Please type key word firstly.');
      return;
    } else {
      var $chart = $('.orgchart');
      // disalbe the expand/collapse feture
      $chart.addClass('noncollapsable');
      // distinguish the matched nodes and the unmatched nodes according to the given key word
      $chart.find('.node').filter(function (index, node) {
        return $(node).text().toLowerCase().indexOf(keyWord) > -1;
      }).addClass('matched')
        .closest('table').parents('table').find('tr:first').find('.node').addClass('retained');
      // hide the unmatched nodes
      $chart.find('.matched,.retained').each(function (index, node) {
        $(node).removeClass('slide-up')
          .closest('.nodes').removeClass('hidden')
          .siblings('.lines').removeClass('hidden');
        var $unmatched = $(node).closest('table').parent().siblings().find('.node:first:not(.matched,.retained)')
          .closest('table').parent().addClass('hidden');
        $unmatched.parent().prev().children().slice(1, $unmatched.length * 2 + 1).addClass('hidden');
      });
      // hide the redundant descendant nodes of the matched nodes
      $chart.find('.matched').each(function (index, node) {
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

  $(function () {

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
      'id': 'grandFather', 'name': 'A.H.M.C.V.P Bakmeedeniya', 'L0 title': 'L0', 'position': [-87.6297980, 41.8781140],
      'children': [
        {
          'id': 'female2', 'name': 'R.M Muthumanike', 'title': 'L0', 'position': [-83.0457540, 42.3314270],
          'children': [
            // A
            {
              'id': 'male2', 'name': 'Edward Bakmeedeniya', 'title': 'A-L0-L1', 'position': [-81.6943610, 41.4993200],
              'children': [
                {
                  'id': 'female2', 'name': 'Tikirimanike', 'title': 'A-L0-L1', 'position': [-81.6943610, 41.4993200],
                  'children': [
                    {
                      'id': 'male2', 'name': 'Peter Bakmeedeniya', 'title': 'A-L0-L1-L2', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'female2', 'name': 'Shila', 'title': 'A-L0-L1-L2', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            {
                              'id': 'male2', 'name': 'Sunny Bakmeedeniya', 'title': 'A-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Asha', 'title': 'A-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Kasun Bakmeedeniya', 'title': 'A-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Charith Bakmeedeniya', 'title': 'A-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'male2', 'name': 'Berti Bakmeedeniya', 'title': 'A-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Shila', 'title': 'A-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'female2', 'name': 'Arini Bakmeedeniya', 'title': 'A-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'female2', 'name': 'Gayathri Bakmeedeniya', 'title': 'A-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'male2', 'name': 'Percy Bakmeedeniya', 'title': 'A-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Yamuna', 'title': 'A-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Asanka Bakmeedeniya', 'title': 'A-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Kavinda Bakmeedeniya', 'title': 'A-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'female2', 'name': 'Padma Bakmeedeniya', 'title': 'A-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Suriyabandara', 'title': 'A-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Indrajith Suriyabandara', 'title': 'A-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Nayanajith Suriyabandara', 'title': 'A-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            }
                          ]
                        }]
                    }]

                }]
            },
            // B
            {
              'id': 'male2', 'name': 'Richard Bakmeedeniya', 'title': 'B-L0-L1', 'position': [-81.6943610, 41.4993200],
              'children': [
                {
                  'id': 'female2', 'name': 'Sheela', 'title': 'B-L0-L1', 'position': [-81.6943610, 41.4993200],
                  'children': [
                    // B1
                    {
                      'id': 'male2', 'name': 'Cyril', 'title': 'B-L0-L1-L2', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'female2', 'name': 'Sumana', 'title': 'B-L0-L1-L2', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            {
                              'id': 'female2', 'name': 'Subashini Bakmeedeniya', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Chandra Herath', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'female2', 'name': 'Yasasi Herath', 'title': 'B-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'female2', 'name': 'Sakila Herath', 'title': 'B-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'male2', 'name': 'Dhammika Bakmeedeniya', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Leka', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Kovida Bakmeedeniya', 'title': 'B-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'female2', 'name': 'Archana Bakmeedeniya', 'title': 'B-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'male2', 'name': 'Chulani Bakmeedeniya', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Pali', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200]
                                }]
                            },
                            {
                              'id': 'female2', 'name': 'Ganga Bakmeedeniya', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Shanthi Ekanayake', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200]
                                }]
                            },
                            {
                              'id': 'female2', 'name': 'Madubhashini Bakmeedeniya', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200]
                            }
                          ]
                        }]
                    },
                    //B2
                    {
                      'id': 'female2', 'name': 'Srima Bakmeedeniya', 'title': 'B-L0-L1-L2', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'male2', 'name': 'Chandra Dissanayake', 'title': 'B-L0-L1-L2', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            {
                              'id': 'female2', 'name': 'Ajantha Dissanayake', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Padma', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'female2', 'name': 'Thakshila', 'title': 'B-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Dhananjaya', 'title': 'B-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'female2', 'name': 'Nalani Dissanayake', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'M.B Senavirathne', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Ruwan Senavirathne', 'title': 'B-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'female2', 'name': 'Udeni Dissanayake', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Renuka', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Udara Dissanayake', 'title': 'B-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'female2', 'name': 'Subadra Dissanayake', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Ekanayake', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Sanjaya Ekanayake', 'title': 'B-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'female2', 'name': 'Anoma Dissanayake', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Herath', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200]
                                }]
                            },
                            {
                              'id': 'male2', 'name': 'Ashoka Dissanayake', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200]
                            }
                          ]
                        }]
                    },
                    //B3
                    {
                      'id': 'female2', 'name': 'Hema Bakmeedeniya', 'title': 'B-L0-L1-L2', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'male2', 'name': 'Premathilake Herath', 'title': 'B-L0-L1-L2', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            {
                              'id': 'female2', 'name': 'Gethanjali Herath', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Sarath Alahakon', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Chanaka', 'title': 'B-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'female2', 'name': 'Chanika', 'title': 'B-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'female2', 'name': 'Chithranjali Herath', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Senarath Herath', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Kasun Herath', 'title': 'B-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Ruwan Herath', 'title': 'B-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] },
                                  ]
                                }]
                            },
                            {
                              'id': 'female2', 'name': 'Nilanjali Herath', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Janaka', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200]
                                }]
                            }
                          ]
                        }]
                    },

                    //B4
                    {
                      'id': 'female2', 'name': 'Kamala Bakmeedeniya', 'title': 'B-L0-L1-L2', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'male2', 'name': 'Lional Hulangamuwa', 'title': 'B-L0-L1-L2', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            {
                              'id': 'male2', 'name': 'Roshan Hulangamuwa', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Amala', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200]
                                }]
                            },
                            {
                              'id': 'male2', 'name': 'Hemantha Hulangamuwa', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Niluka', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Salini Hulangamuwa', 'title': 'B-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'female2', 'name': 'Nishanthi Hulangamuwa', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Anuruddha Kadigawa', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200]
                                }]
                            },
                            {
                              'id': 'male2', 'name': 'Senaka Hulangamuwa', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200]
                            }
                          ]
                        }]
                    },
                    //B5
                    {
                      'id': 'female2', 'name': 'Indrani Bakmeedeniya', 'title': 'B-L0-L1-L2', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'male2', 'name': 'Gamini Senanayake', 'title': 'B-L0-L1-L2', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            { 'id': 'female2', 'name': 'Nisansala Senanayake', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200] },
                            { 'id': 'female2', 'name': 'Lasika Senanayake', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200] },
                            { 'id': 'male2', 'name': 'Anuruddha Senanayake', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200] }
                          ]
                        }]
                    },
                    //B6
                    {
                      'id': 'male2', 'name': 'Justin Bakmeedeniya', 'title': 'B-L0-L1-L2', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'female2', 'name': 'Kanthi', 'title': 'B-L0-L1-L2', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            { 'id': 'female2', 'name': 'Rasala Bakmeedeniya', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200] },
                            { 'id': 'male2', 'name': 'Danusha Bakmeedeniya', 'title': 'B-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200] }
                          ]
                        }]
                    }
                  ]

                }]
            }
          ]
        }
      ]
    };

    $('#chart-container').orgchart({
      'data': datascource,
      'nodeContent': 'title',
      'nodeID': 'id',
      'createNode': function ($node, data) {
        $node.on('click', function () {
          var view = map.getView();
          var duration = 2000;
          var start = +new Date();
          var pan = ol.animation.pan({
            duration: duration,
            source: view.getCenter(),
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
          click: function () {
            $(this).siblings('.second-menu').toggle();
          }
        });
        var secondMenu = '<div class="second-menu"><img class="avatar" src="../img/avatar/' + data.id + '.jpg"></div>';
        $node.append(secondMenuIcon).append(secondMenu);
      }
    });


    $('#btn-filter-node').on('click', function () {
      filterNodes($('#key-word').val());
    });

    $('#btn-cancel').on('click', function () {
      clearFilterResult();
    });

    $('#key-word').on('keyup', function (event) {
      if (event.which === 13) {
        filterNodes(this.value);
      } else if (event.which === 8 && this.value.length === 0) {
        clearFilterResult();
      }
    });



  });

})(jQuery);