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
      'id': 'grandFather', 'name': 'A.H.M.C.V.P Bakmeedeniya', 'L0 title': 'L0 ', 'position': [-87.6297980, 41.8781140],
      'children': [
        {
          'id': 'female2', 'name': 'R.M Muthumanike', 'title': 'L0 ', 'position': [-83.0457540, 42.3314270],
          'children': [
            // A
            {
              'id': 'male2', 'name': 'Edward Bakmeedeniya', 'title': 'A-L0-L1 ', 'position': [-81.6943610, 41.4993200],
              'children': [
                {
                  'id': 'female2', 'name': 'Tikirimanike', 'title': 'A-L0-L1 ', 'position': [-81.6943610, 41.4993200],
                  'children': [
                    {
                      'id': 'male2', 'name': 'Peter Bakmeedeniya', 'title': 'A-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'female2', 'name': 'Shila', 'title': 'A-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            {
                              'id': 'male2', 'name': 'Sunny Bakmeedeniya', 'title': 'A-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Asha', 'title': 'A-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Kasun Bakmeedeniya', 'title': 'A-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Charith Bakmeedeniya', 'title': 'A-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'male2', 'name': 'Berti Bakmeedeniya', 'title': 'A-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Shila', 'title': 'A-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'female2', 'name': 'Arini Bakmeedeniya', 'title': 'A-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'female2', 'name': 'Gayathri Bakmeedeniya', 'title': 'A-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'male2', 'name': 'Percy Bakmeedeniya', 'title': 'A-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Yamuna', 'title': 'A-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Asanka Bakmeedeniya', 'title': 'A-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Kavinda Bakmeedeniya', 'title': 'A-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'female2', 'name': 'Padma Bakmeedeniya', 'title': 'A-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Suriyabandara', 'title': 'A-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Indrajith Suriyabandara', 'title': 'A-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Nayanajith Suriyabandara', 'title': 'A-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
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
              'id': 'male2', 'name': 'Richard Bakmeedeniya', 'title': 'B-L0-L1 ', 'position': [-81.6943610, 41.4993200],
              'children': [
                {
                  'id': 'female2', 'name': 'Sheela', 'title': 'B-L0-L1 ', 'position': [-81.6943610, 41.4993200],
                  'children': [
                    // B1
                    {
                      'id': 'male2', 'name': 'Cyril', 'title': 'B-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'female2', 'name': 'Sumana', 'title': 'B-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            {
                              'id': 'female2', 'name': 'Subashini Bakmeedeniya', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Chandra Herath', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'female2', 'name': 'Yasasi Herath', 'title': 'B-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'female2', 'name': 'Sakila Herath', 'title': 'B-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'male2', 'name': 'Dhammika Bakmeedeniya', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Leka', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Kovida Bakmeedeniya', 'title': 'B-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'female2', 'name': 'Archana Bakmeedeniya', 'title': 'B-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'male2', 'name': 'Chulani Bakmeedeniya', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Pali', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                                }]
                            },
                            {
                              'id': 'female2', 'name': 'Ganga Bakmeedeniya', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Shanthi Ekanayake', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                                }]
                            },
                            {
                              'id': 'female2', 'name': 'Madubhashini Bakmeedeniya', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                            }
                          ]
                        }]
                    },
                    //B2
                    {
                      'id': 'female2', 'name': 'Srima Bakmeedeniya', 'title': 'B-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'male2', 'name': 'Chandra Dissanayake', 'title': 'B-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            {
                              'id': 'female2', 'name': 'Ajantha Dissanayake', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Padma', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'female2', 'name': 'Thakshila', 'title': 'B-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Dhananjaya', 'title': 'B-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'female2', 'name': 'Nalani Dissanayake', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'M.B Senavirathne', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Ruwan Senavirathne', 'title': 'B-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'female2', 'name': 'Udeni Dissanayake', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Renuka', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Udara Dissanayake', 'title': 'B-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'female2', 'name': 'Subadra Dissanayake', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Ekanayake', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Sanjaya Ekanayake', 'title': 'B-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'female2', 'name': 'Anoma Dissanayake', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Herath', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                                }]
                            },
                            {
                              'id': 'male2', 'name': 'Ashoka Dissanayake', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                            }
                          ]
                        }]
                    },
                    //B3
                    {
                      'id': 'female2', 'name': 'Hema Bakmeedeniya', 'title': 'B-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'male2', 'name': 'Premathilake Herath', 'title': 'B-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            {
                              'id': 'female2', 'name': 'Gethanjali Herath', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Sarath Alahakon', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Chanaka', 'title': 'B-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'female2', 'name': 'Chanika', 'title': 'B-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'female2', 'name': 'Chithranjali Herath', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Senarath Herath', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Kasun Herath', 'title': 'B-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Ruwan Herath', 'title': 'B-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                  ]
                                }]
                            },
                            {
                              'id': 'female2', 'name': 'Nilanjali Herath', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Janaka', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                                }]
                            }
                          ]
                        }]
                    },

                    //B4
                    {
                      'id': 'female2', 'name': 'Kamala Bakmeedeniya', 'title': 'B-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'male2', 'name': 'Lional Hulangamuwa', 'title': 'B-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            {
                              'id': 'male2', 'name': 'Roshan Hulangamuwa', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Amala', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                                }]
                            },
                            {
                              'id': 'male2', 'name': 'Hemantha Hulangamuwa', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Niluka', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Salini Hulangamuwa', 'title': 'B-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'female2', 'name': 'Nishanthi Hulangamuwa', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Anuruddha Kadigawa', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                                }]
                            },
                            {
                              'id': 'male2', 'name': 'Senaka Hulangamuwa', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                            }
                          ]
                        }]
                    },
                    //B5
                    {
                      'id': 'female2', 'name': 'Indrani Bakmeedeniya', 'title': 'B-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'male2', 'name': 'Gamini Senanayake', 'title': 'B-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            { 'id': 'female2', 'name': 'Nisansala Senanayake', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200] },
                            { 'id': 'female2', 'name': 'Lasika Senanayake', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200] },
                            { 'id': 'male2', 'name': 'Anuruddha Senanayake', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200] }
                          ]
                        }]
                    },
                    //B6
                    {
                      'id': 'male2', 'name': 'Justin Bakmeedeniya', 'title': 'B-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'female2', 'name': 'Kanthi', 'title': 'B-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            { 'id': 'female2', 'name': 'Rasala Bakmeedeniya', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200] },
                            { 'id': 'male2', 'name': 'Danusha Bakmeedeniya', 'title': 'B-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200] }
                          ]
                        }]
                    }
                  ]

                }]
            },
            //C
            {
              'id': 'male2', 'name': 'Voli Bakmeedeniya', 'title': 'C-L0-L1 ', 'position': [-81.6943610, 41.4993200],
              'children': [
                {
                  'id': 'female2', 'name': 'Desi', 'title': 'C-L0-L1 ', 'position': [-81.6943610, 41.4993200],
                  'children': [
                    {
                      'id': 'male2', 'name': 'Sunny Bakmeedeniya', 'title': 'C-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'female2', 'name': 'Doti', 'title': 'C-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200]
                        },
                        {
                          'id': 'female2', 'name': 'Pearl Bakmeedeniya', 'title': 'C-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            {
                              'id': 'male2', 'name': 'Jayamanna', 'title': 'C-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200]
                            }
                          ]
                        },
                        {
                          'id': 'female2', 'name': 'Vayalot Bakmeedeniya', 'title': 'C-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            {
                              'id': 'male2', 'name': 'Dissanayake', 'title': 'C-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200]
                            }
                          ]
                        },
                        {
                          'id': 'male2', 'name': 'Siri', 'title': 'C-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            {
                              'id': 'female2', 'name': 'Prema', 'title': 'C-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Chandrani Bakmeedeniya', 'title': 'C-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    {
                                      'id': 'male2', 'name': 'Wijisiri wijesekara', 'title': 'C-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                                    }]

                                },
                                { 'id': 'male2', 'name': 'Ruwan Bakmeedeniya', 'title': 'C-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200] }
                              ]
                            }
                          ]
                        }
                      ]
                    }]

                }]
            },
            //D
            {
              'id': 'male2', 'name': 'Charli Bakmeedeniya', 'title': 'D-L0-L1 ', 'position': [-81.6943610, 41.4993200],
              'children': [
                {
                  'id': 'female2', 'name': 'Wife of Charli', 'title': 'D-L0-L1 ', 'position': [-81.6943610, 41.4993200],
                  'children': [
                    { 'id': 'male2', 'name': 'Son of Charli', 'title': 'D-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200] },
                    { 'id': 'male2', 'name': 'Son of Charli', 'title': 'D-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200] },
                    { 'id': 'male2', 'name': 'Nandana', 'title': 'D-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200] },
                    { 'id': 'female2', 'name': 'Daughter of Charli', 'title': 'D-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200] }
                  ]
                }]
            },
            // E
            {
              'id': 'female2', 'name': 'Clera Bakmeedeniya', 'title': 'E-L0-L1 ', 'position': [-81.6943610, 41.4993200],
              'children': [
                {
                  'id': 'male2', 'name': 'E.E Kulathunga', 'title': 'E-L0-L1 ', 'position': [-81.6943610, 41.4993200],
                  'children': [
                    //E1
                    { 'id': 'male2', 'name': 'Paul Kulathunga', 'title': 'E-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200] },
                    //E2
                    { 'id': 'male2', 'name': 'R.D Kulathunga', 'title': 'E-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200] },
                    // E3
                    {
                      'id': 'male2', 'name': 'Joseph', 'title': 'E-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'female2', 'name': 'Hema', 'title': 'E-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            {
                              'id': 'male2', 'name': 'Parakrama Kulathunga', 'title': 'E-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Kumari', 'title': 'E-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Lakshitha Kulathunga', 'title': 'E-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Anuruddha Kulathunga', 'title': 'E-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'male2', 'name': 'Manjula Kulathunga', 'title': 'E-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Chandhani', 'title': 'E-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Anuradha Kulathunga', 'title': 'E-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            {
                              'id': 'male2', 'name': 'Indika Kulathunga', 'title': 'E-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                            },
                            {
                              'id': 'female2', 'name': 'Lasanthi Kulathunga', 'title': 'E-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                            },
                            {
                              'id': 'female2', 'name': 'Guthila Kulathunga', 'title': 'E-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                            }
                          ]
                        }
                      ]
                    },
                    //E4
                    {
                      'id': 'female2', 'name': 'Magaret Kulathunga', 'title': 'E-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'male2', 'name': 'R.D Jayasingha', 'title': 'E-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            {
                              'id': 'female2', 'name': 'Jessica Jayasingha', 'title': 'E-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                { 'id': 'male2', 'name': 'Arjuna', 'title': 'E-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200] }]
                            }
                          ]
                        }]
                    },
                    //E5
                    { 'id': 'female2', 'name': 'Rita Kulathunga', 'title': 'E-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200] },
                  ]
                }]
            },

            // F
            {
              'id': 'female2', 'name': 'Rosalin Bakmeedeniya', 'title': 'F-L0-L1 ', 'position': [-81.6943610, 41.4993200],
              'children': [
                {
                  'id': 'male2', 'name': 'Thomas Tilakarathne', 'title': 'F-L0-L1 ', 'position': [-81.6943610, 41.4993200],
                  'children': [
                    // F1
                    {
                      'id': 'male2', 'name': 'Aloshiyas Tilakarathne', 'title': 'F-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        // F1-1
                        {
                          'id': 'female2', 'name': 'Raaja', 'title': 'F-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            {
                              'id': 'female2', 'name': 'Reeta Tilakarathne', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Kingsly Ranaweera', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'female2', 'name': 'Iresha Ranaweera', 'title': 'F-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'female2', 'name': 'Iromi Ranaweera', 'title': 'F-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            // F1-2
                            {
                              'id': 'female2', 'name': 'Padma Tilakarathne', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Calistas Perera', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Damith Perera', 'title': 'F-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'female2', 'name': 'Dilini Perera', 'title': 'F-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            // F1-3
                            {
                              'id': 'female2', 'name': 'Helan Tilakarathne', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Viraj Jayalath', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Weranga', 'title': 'F-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Viranga', 'title': 'F-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            // F1-4
                            {
                              'id': 'female2', 'name': 'Gerty Tilakarathne', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Susantha Jayawardhana', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Sajith Jayawardhana', 'title': 'F-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Sanoj Jayawardhana', 'title': 'F-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            // F1-5
                            {
                              'id': 'female2', 'name': 'Akashani Tilakarathne', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Sisira Kumarasinghe', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Ayantha Kumarasinghe', 'title': 'F-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            }
                          ]
                        }]
                    },
                    // F2
                    {
                      'id': 'female2', 'name': 'Anee Tilakarathne', 'title': 'F-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        // F2-1
                        {
                          'id': 'male2', 'name': 'Antony Perera', 'title': 'F-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            {
                              'id': 'male2', 'name': 'Ananda Perera', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Priyanthi', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                                }]
                            },
                            // F2-2
                            {
                              'id': 'female2', 'name': 'Aira Perera', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Donald Bakmeedeniya', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Anura Bakmeedeniya', 'title': 'F-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            // F2-3
                            {
                              'id': 'male2', 'name': 'Nimal Perera', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                            },
                            // F2-4
                            {
                              'id': 'male2', 'name': 'Sisil Perera', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Meri', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                                }]
                            },
                            // F2-5
                            {
                              'id': 'female2', 'name': 'Sister Wasantha', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                            },
                            // F2-6
                            {
                              'id': 'male2', 'name': 'Rala Perera', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                            },
                            // F2-7
                            {
                              'id': 'female2', 'name': 'Nirmali Perera', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Wimal', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                                }]

                            },
                            // F2-8
                            {
                              'id': 'female2', 'name': 'Nandani Perera', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                            },
                            // F2-9
                            {
                              'id': 'male2', 'name': 'Sumith Perera', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                            }
                          ]
                        }]
                    },
                    // F3
                    {
                      'id': 'male2', 'name': 'Cyril Tilakarathne', 'title': 'F-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        // F3-1
                        {
                          'id': 'female2', 'name': 'Perli', 'title': 'F-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            {
                              'id': 'male2', 'name': 'Lal Tilakarathne', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Dilshiya', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                                }]
                            },
                            // F3-2
                            {
                              'id': 'female2', 'name': 'Jesica Tilakarathne', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Methananda', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                                }]
                            }
                          ]
                        }]
                    },
                    // F4
                    {
                      'id': 'male2', 'name': 'John Tilakarathne', 'title': 'F-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        // F4-1
                        {
                          'id': 'female2', 'name': 'Thresia', 'title': 'F-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            {
                              'id': 'female2', 'name': 'Monika Tilakarathne', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Vinsi Perera', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                                }]
                            },
                            {
                              'id': 'male2', 'name': 'Antony Tilakarathne', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                            },
                            {
                              'id': 'male2', 'name': 'Nihal Tilakarathne', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                            }
                          ]
                        }]
                    },
                    // F5
                    {
                      'id': 'female2', 'name': 'Byatris Tilakarathne', 'title': 'F-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        // F5-1
                        {
                          'id': 'male2', 'name': 'Liyo Amarasinghe', 'title': 'F-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            {
                              'id': 'male2', 'name': 'Upali Amarasinghe', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                            },
                            {
                              'id': 'female2', 'name': 'Reeta Amarasinghe', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                            },
                            {
                              'id': 'female2', 'name': 'Fateema Amarasinghe', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Nihal Nanayakkara', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    {
                                      'id': 'male2', 'name': 'Dilan Nanayakkara', 'title': 'F-L0-L1-L2-L4 ', 'position': [-81.6943610, 41.4993200]
                                    },
                                    {
                                      'id': 'male2', 'name': 'Layan Nanayakkara', 'title': 'F-L0-L1-L2-L4 ', 'position': [-81.6943610, 41.4993200]
                                    }
                                  ]
                                }]
                            },
                            {
                              'id': 'male2', 'name': 'Gamini Amarasinghe', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Shriyani', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                                }]
                            }
                          ]
                        }]
                    },

                    // F6
                    {
                      'id': 'female2', 'name': 'Magaret Tilakarathne', 'title': 'F-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'male2', 'name': 'Fredi Wickramasinghe', 'title': 'F-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            // F6-1
                            {
                              'id': 'male2', 'name': 'Loela Wickramasinghe', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                            },
                            // F6-2
                            {
                              'id': 'male2', 'name': 'Gamini Wickramasinghe', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Shriyani', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                                }]
                            },
                            // F6-3
                            {
                              'id': 'female2', 'name': 'Chandrika Wickramasinghe', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Dharmasena', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    {
                                      'id': 'male2', 'name': 'Chamila Dharmasena', 'title': 'F-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200]
                                    },
                                    {
                                      'id': 'female2', 'name': 'Malsha Dharmasena', 'title': 'F-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200]
                                    }
                                  ]
                                }]
                            },
                            // F6-4
                            {
                              'id': 'female2', 'name': 'Morin Wickramasinghe', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Upali', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    {
                                      'id': 'male2', 'name': 'Prasad', 'title': 'F-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200]
                                    },
                                    {
                                      'id': 'male2', 'name': 'Denesh', 'title': 'F-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200]
                                    }
                                  ]
                                }]
                            },

                            // F6-5
                            {
                              'id': 'female2', 'name': 'Princy Wickramasinghe', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Perci', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    {
                                      'id': 'male2', 'name': 'Charls', 'title': 'F-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200]
                                    }
                                  ]
                                }]
                            },
                            // F6-6
                            {
                              'id': 'male2', 'name': 'Father Raymand', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                            },
                            // F6-7
                            {
                              'id': 'male2', 'name': 'Gregory Wickramasinghe', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Kumari', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    {
                                      'id': 'male2', 'name': 'Vincent', 'title': 'F-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200]
                                    }
                                  ]
                                }]

                            },
                            // F6-8
                            {
                              'id': 'female2', 'name': 'Polin Wickramasinghe', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                            },
                            // F6-9
                            {
                              'id': 'female2', 'name': 'Myurial Wickramasinghe', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Upul', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                                }]
                            }
                          ]
                        }]
                    },
                    // F7
                    {
                      'id': 'male2', 'name': 'Stevan Tilakarathne', 'title': 'F-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'female2', 'name': 'Prema', 'title': 'F-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            // F7-1
                            {
                              'id': 'male2', 'name': 'Palitha Tilakarathne', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                            },
                            // F7-2
                            {
                              'id': 'female2', 'name': 'Padmini Tilakarathne', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Abyrathne', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                                }]
                            },
                            // F7-3
                            {
                              'id': 'male2', 'name': 'Jayantha Tilakarathne', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Kumari', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                                }]
                            },
                            // F7-4
                            {
                              'id': 'female2', 'name': 'Sandya Tilakarathne', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Lenin', 'title': 'F-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    {
                                      'id': 'male2', 'name': 'Kevin', 'title': 'F-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200]
                                    }
                                  ]
                                }]
                            }
                          ]
                        }]
                    }

                  ]

                }]
            },
            // G Ranatunga
            {
              'id': 'ElanRanathunga', 'name': 'Elan Bakmeedeniya', 'title': 'G-L0-L1 ', 'position': [-81.6943610, 41.4993200],
              'children': [
                {
                  'id': 'male2', 'name': 'J.D.S Ranatunga', 'title': 'G-L0-L1 ', 'position': [-81.6943610, 41.4993200],
                  'children': [
                    // G1
                    {
                      'id': 'male2', 'name': 'George Ranatunga', 'title': 'G-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'female2', 'name': 'Beril', 'title': 'G-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            // G1-1
                            {
                              'id': 'male2', 'name': 'Sriyan Ranatunga', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Rohini', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Chamira Ranatunga', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Nadeeka Ranatunga', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            // G1-2
                            {
                              'id': 'female2', 'name': 'Nilanthi Ranatunga', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Parakrama Gamage', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Hasith Gamage', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Sanjaya Gamage', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            }
                          ]
                        }]
                    },
                    // G2
                    {
                      'id': 'BurtyRanathunga', 'name': 'Berti Ranatunga', 'title': 'G-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [

                        {
                          'id': 'female2', 'name': 'Hema', 'title': 'G-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            // G2-1
                            {
                              'id': 'male2', 'name': 'Lalith Ranatunga', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Uthara', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'female2', 'name': 'Dushani Ranatunga', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'female2', 'name': 'Anuki Ranatunga', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            // G2-2
                            {
                              'id': 'female2', 'name': 'Shanthi Ranatunga', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Bandula Bandaranayake', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Lahiru Bandaranayake', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Renuk Bandaranayake', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Kusal Bandaranayake', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            // G2-3
                            {
                              'id': 'female2', 'name': 'Anishka Ranatunga', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Depal Peiris', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Deneth Peiris', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Avanka Peiris', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            // G2-4
                            {
                              'id': 'male2', 'name': 'Rasika Ranatunga', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Shamini', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'female2', 'name': 'Amanda Ranatunga', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Charitha Ranatunga', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Devin Ranatunga', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            }
                          ]
                        }]
                    },
                    // G3
                    {
                      'id': 'LawyerChandraRanathunga', 'name': 'Chandra Ranatunga', 'title': 'G-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'female2', 'name': 'Manel', 'title': 'G-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            // G1-1
                            {
                              'id': 'male2', 'name': 'Ranjan Ranatunga', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Prasadini', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'female2', 'name': 'Chamithri Ranatunga', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Ranjan Ranatunga', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'female2', 'name': 'Navindri Ranatunga', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            // G1-2
                            {
                              'id': 'female2', 'name': 'Dilrukshi Ranatunga', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Lakshman Hulugalle', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'female2', 'name': 'Sachini Hulugalle', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'female2', 'name': 'Sajini Hulugalle', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'female2', 'name': 'Pamodi Hulugalle', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            }
                          ]
                        }]
                    },
                    // G4
                    {
                      'id': 'male2', 'name': 'Cyril Ranatunga', 'title': 'G-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'female2', 'name': 'Mertle', 'title': 'G-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            // G1-1
                            {
                              'id': 'male2', 'name': 'Niran Ranatunga', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Ranmali', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Ravin Ranatunga', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            // G1-2
                            {
                              'id': 'male2', 'name': 'Rajind Ranatunga', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Meenal', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                                }]
                            }
                          ]
                        }]
                    },
                    // G5
                    {
                      'id': 'female2', 'name': 'Leela Ranatunga', 'title': 'G-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'male2', 'name': 'Edmond Dharmasiriwardana', 'title': 'G-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            // G1-1
                            {
                              'id': 'female2', 'name': 'Pushpa Dharmasiriwardana', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'male2', 'name': 'Premawiththa Rathnayake', 'title': 'G-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'female2', 'name': 'Jinendri Rathnayake', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Anura Rathnayake', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Charith Rathnayake', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            // G1-2
                            {
                              'id': 'male2', 'name': 'Damayantha Dharmasiriwardana', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Savumya', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'female2', 'name': 'Navodya Dharmasiriwardana', 'title': 'G-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            },
                            // G1-3
                            {
                              'id': 'male2', 'name': 'Mahesh Dharmasiriwardana', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Sarojini', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                                }]
                            }
                          ]
                        }]
                    },
                    // G6
                    {
                      'id': 'female2', 'name': 'Kamala Ranatunga', 'title': 'G-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'male2', 'name': 'Nandana Wickramatunga', 'title': 'G-L0-L1-L2', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            // G1-1
                            {
                              'id': 'male2', 'name': 'Kumudu Wickramatunga', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                            },
                            // G1-2
                            {
                              'id': 'male2', 'name': 'Adithya Wickramatunga', 'title': 'G-L0-L1-L2-L3 ,  Professor, Dindi', 'position': [-81.6943610, 41.4993200]
                            },
                            // G1-3
                            {
                              'id': 'male2', 'name': 'Channa Wickramatunga', 'title': 'G-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                            }
                          ]
                        }]
                    },

                  ]

                }]
            },
            // H Bowela
            {
              'id': 'female2', 'name': 'Grace Bakmeedeniya', 'title': 'H-L0-L1 ', 'position': [-81.6943610, 41.4993200],
              'children': [
                {
                  'id': 'male2', 'name': 'K.B Bowela', 'title': 'H-L0-L1 ', 'position': [-81.6943610, 41.4993200]
                }]
            },
            // I Albert
            {
              'id': 'male2', 'name': 'Albert Bakmeedeniya', 'title': 'I-L0-L1 ', 'position': [-81.6943610, 41.4993200],
              'children': [
                {
                  'id': 'female2', 'name': 'Dingiri Amma', 'title': 'I-L0-L1 ', 'position': [-81.6943610, 41.4993200],
                  'children': [
                    //I1
                    // {
                    //   'id': 'male2', 'name': 'Joseph', 'title': 'I-L0-L1-L2', 'position': [-81.6943610, 41.4993200],
                    //   'children': [
                    //     {  
                    //       'id': 'female2', 'name': 'Hema', 'title': 'I-L0-L1-L2', 'position': [-81.6943610, 41.4993200],
                    //       'children': [
                    //         {
                    //           'id': 'male2', 'name': 'Parakrama Kulathunga', 'title': 'I-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                    //           'children': [
                    //             {
                    //               'id': 'female2', 'name': 'Kumari', 'title': 'I-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                    //               'children': [
                    //                 { 'id': 'male2', 'name': 'Lakshitha Kulathunga', 'title': 'I-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] },
                    //                 { 'id': 'male2', 'name': 'Anuruddha Kulathunga', 'title': 'I-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] }
                    //               ]
                    //             }]
                    //         },
                    //         {
                    //           'id': 'male2', 'name': 'Manjula Kulathunga', 'title': 'I-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                    //           'children': [
                    //             {
                    //               'id': 'female2', 'name': 'Chandhani', 'title': 'I-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                    //               'children': [
                    //                 { 'id': 'male2', 'name': 'Anuradha Kulathunga', 'title': 'I-L0-L1-L2-L3-L4', 'position': [-81.6943610, 41.4993200] }
                    //               ]
                    //             }]
                    //         },
                    //         {
                    //           'id': 'male2', 'name': 'Indika Kulathunga', 'title': 'I-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200]
                    //         },
                    //         {
                    //           'id': 'female2', 'name': 'Lasanthi Kulathunga', 'title': 'I-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200]
                    //         },
                    //         {
                    //           'id': 'female2', 'name': 'Guthila Kulathunga', 'title': 'I-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200]
                    //         }
                    //       ]
                    //     }
                    //   ]
                    // },
                    // //I4
                    // {
                    //   'id': 'female2', 'name': 'Magaret Kulathunga', 'title': 'I-L0-L1-L2', 'position': [-81.6943610, 41.4993200],
                    //   'children': [
                    //     {
                    //       'id': 'male2', 'name': 'R.D Jayasingha', 'title': 'I-L0-L1-L2', 'position': [-81.6943610, 41.4993200],
                    //       'children': [
                    //         {
                    //           'id': 'female2', 'name': 'Jessica Jayasingha', 'title': 'I-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200],
                    //           'children': [
                    //             { 'id': 'male2', 'name': 'Arjuna', 'title': 'I-L0-L1-L2-L3', 'position': [-81.6943610, 41.4993200] }]
                    //         }
                    //       ]
                    //     }]
                    // },
                    // //I5
                    // { 'id': 'female2', 'name': 'Rita Kulathunga', 'title': 'I-L0-L1-L2', 'position': [-81.6943610, 41.4993200] },
                  ]
                }]
            },
            // J TVP
            {
              'id': 'TVP', 'name': 'T.V.P. Bakmeedeniya', 'title': 'J-L0-L1 ', 'position': [-81.6943610, 41.4993200],
              'children': [
                {
                  'id': 'female2', 'name': 'Chandradevi', 'title': 'J-L0-L1 ', 'position': [-81.6943610, 41.4993200],
                  'children': [
                    //J1
                    {
                      'id': 'female2', 'name': 'Jayantha Bakmeedeniya', 'title': 'J-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'male2', 'name': 'Lesli Wijeratna', 'title': 'J-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            { 'id': 'male2', 'name': 'Shashi Wijeratna', 'title': 'J-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                            'children': [
                              {
                                'id': 'female2', 'name': 'Katrin', 'title': 'J-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                'children': [
                                    { 'id': 'male2', 'name': 'Anniel', 'title': 'J-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'male2', 'name': 'Nohlen', 'title': 'J-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] },
                                    { 'id': 'female2', 'name': 'Annika', 'title': 'J-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }]
                              }] },
                            { 'id': 'female2', 'name': 'Melanie Wijeratna', 'title': 'J-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200] }
                          ]
                        }
                      ]
                    },
                    //J2
                    {
                      'id': 'female2', 'name': 'Vinitha Bakmeedeniya', 'title': 'J-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'male2', 'name': 'Ananda Wijeyasinghe', 'title': 'J-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            { 'id': 'female2', 'name': 'Thilini Wijeyasinghe', 'title': 'J-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                            'children': [
                              {
                                'id': 'male2', 'name': 'Darshan', 'title': 'J-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                'children': [
                                  {
                                    'id': 'female2', 'name': 'Hansana', 'title': 'J-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200]
                                  }]
                              }] 
                            },

                            { 'id': 'male2', 'name': 'Channa Wijeyasinghe', 'title': 'J-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200], 
                            'children': [
                              {
                                'id': 'female2', 'name': 'Dilhani', 'title': 'J-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                'children': [
                                  {
                                    'id': 'male2', 'name': 'Thineth', 'title': 'J-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200]
                                  }]
                              }]},
                            { 'id': 'male2', 'name': 'Roshan Wijeyasinghe', 'title': 'J-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200], 
                            'children': [
                              {
                                'id': 'female2', 'name': 'Rangika', 'title': 'J-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                'children': [
                                  {
                                    'id': 'male2', 'name': 'Minuka', 'title': 'J-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200]
                                  }]
                              }]}
                          ]
                        }
                      ]
                    },
                    //J3
                    {
                      'id': 'male2', 'name': 'Donald Bakmeedeniya', 'title': 'J-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'female2', 'name': 'Aira', 'title': 'J-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            { 'id': 'male2', 'name': 'Anura Bakmeedeniya', 'title': 'J-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200] }
                          ]
                        }
                      ]
                    },
                    //J4
                    {
                      'id': 'male2', 'name': 'Lal Bakmeedeniya', 'title': 'J-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                      'children': [
                        {
                          'id': 'female2', 'name': 'Anula', 'title': 'J-L0-L1-L2 ', 'position': [-81.6943610, 41.4993200],
                          'children': [
                            {
                              'id': 'Navinth', 'name': 'Navinth Bakmeedeniya', 'title': 'J-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Wathsala', 'title': 'J-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200]
                                }]
                            },
                            {
                              'id': 'Ashan', 'name': 'Ashan Bakmeedeniya', 'title': 'J-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                              'children': [
                                {
                                  'id': 'female2', 'name': 'Harshika', 'title': 'J-L0-L1-L2-L3 ', 'position': [-81.6943610, 41.4993200],
                                  'children': [
                                    { 'id': 'male2', 'name': 'Suhas', 'title': 'J-L0-L1-L2-L3-L4 ', 'position': [-81.6943610, 41.4993200] }
                                  ]
                                }]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }]
            },
            // K   J.P.
            {
              'id': 'male2', 'name': 'J.P. Bakmeedeniya', 'title': 'K-L0-L1 ', 'position': [-81.6943610, 41.4993200],
              'children': [
                {
                  'id': 'female2', 'name': 'Wimalawathi', 'title': 'K-L0-L1 ', 'position': [-81.6943610, 41.4993200]
                }]
            },


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