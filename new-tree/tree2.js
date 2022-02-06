FamilyTree.templates.base.defs =
    `<g transform="matrix(0.05,0,0,0.05,-12,-9)" id="heart">
        <path fill="#aeaeae" d="M438.482,58.61c-24.7-26.549-59.311-41.655-95.573-41.711c-36.291,0.042-70.938,15.14-95.676,41.694l-8.431,8.909  l-8.431-8.909C181.284,5.762,98.663,2.728,45.832,51.815c-2.341,2.176-4.602,4.436-6.778,6.778 c-52.072,56.166-52.072,142.968,0,199.134l187.358,197.581c6.482,6.843,17.284,7.136,24.127,0.654 c0.224-0.212,0.442-0.43,0.654-0.654l187.29-197.581C490.551,201.567,490.551,114.77,438.482,58.61z"/>
        </g>
     <g transform="matrix(1,0,0,1,0,0)" id="dot"></g>
      <g id="base_node_menu" style="cursor:pointer;">
          <rect x="0" y="0" fill="transparent" width="22" height="22"></rect>
          <circle cx="4" cy="11" r="2" fill="#b1b9be"></circle>
          <circle cx="11" cy="11" r="2" fill="#b1b9be"></circle>
          <circle cx="18" cy="11" r="2" fill="#b1b9be"></circle>
      </g>
      <g style="cursor: pointer;" id="base_tree_menu">
          <rect x="0" y="0" width="25" height="25" fill="transparent"></rect>
          ${FamilyTree.icon.addUser(25, 25, '#fff', 0, 0)}
      </g>
      <g style="cursor: pointer;" id="base_tree_menu_close">
          <circle cx="12.5" cy="12.5" r="12" fill="#F57C00"></circle>
          ${FamilyTree.icon.close(25, 25, '#fff', 0, 0)}
      </g>            
      <g id="base_up">
          <circle cx="115" cy="30" r="15" fill="#fff" stroke="#b1b9be" stroke-width="1"></circle>
          ${FamilyTree.icon.ft(20, 80, '#b1b9be', 105, -10)}
      </g>
      <clipPath id="base_img_0">
        <circle id="base_img_0_stroke" cx="45" cy="62" r="35"/>
      </clipPath>
      <clipPath id="base_img_1">
        <circle id="base_img_1_stroke" cx="100" cy="62" r="35"/>
      </clipPath>
      `;

FamilyTree.templates.main = Object.assign({}, FamilyTree.templates.base);
FamilyTree.templates.main.defs = `<style>
                                        .{randId} .bft-edit-form-header, .{randId} .bft-img-button{
                                            background-color: #aeaeae;
                                        }
                                        .{randId}.male .bft-edit-form-header, .{randId}.male .bft-img-button{
                                            background-color: #6bb4df;
                                        }        
                                        .{randId}.male div.bft-img-button:hover{
                                            background-color: #cb4aaf;
                                        }
                                        .{randId}.female .bft-edit-form-header, .{randId}.female .bft-img-button{
                                            background-color: #cb4aaf;
                                        }        
                                        .{randId}.female div.bft-img-button:hover{
                                            background-color: #6bb4df;
                                        }
    </style>`;
FamilyTree.templates.main.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#ffffff" stroke-width="3" stroke="#ccc" rx="5" ry="5"></rect>' +
    '<rect x="0" y="0" height="20" width="{w}" fill="#b1b9be" stroke-width="1" stroke="#b1b9be" rx="5" ry="5"></rect>' +
    '<line x1="0" y1="20" x2="250" y2="20" stroke-width="5" stroke="#b1b9be"></line>';

FamilyTree.templates.main.field_0 =
    '<text ' + FamilyTree.attr.width + ' ="250" style="font-size: 14px;" font-variant="all-small-caps" fill="white" x="125" y="16" text-anchor="middle">{val}</text>';
FamilyTree.templates.main.field_1 =
    '<text ' + FamilyTree.attr.width + ' ="160" data-text-overflow="multiline" style="font-size: 14px;" fill="black" x="100" y="66" text-anchor="start">{val}</text>';
FamilyTree.templates.main.field_2 =
    '<text ' + FamilyTree.attr.width + ' ="160" style="font-size: 10px;" fill="#b1b9be" x="100" y="95" text-anchor="start">{val}</text>';
FamilyTree.templates.main.field_3 =
    '<text ' + FamilyTree.attr.width + ' ="60" style="font-size: 12px;" fill="black" x="47" y="112" text-anchor="middle">{val}</text>';
FamilyTree.templates.main.img_0 =
    `<use xlink:href="#base_img_0_stroke" /> 
       <circle id="base_img_0_stroke" fill="#b1b9be" cx="45" cy="62" r="37"/>
      <image preserveAspectRatio="xMidYMid slice" clip-path="url(#base_img_0)" xlink:href="{val}" x="10" y="26" width="72" height="72"></image>`;
FamilyTree.templates.main_male = Object.assign({}, FamilyTree.templates.main);
FamilyTree.templates.main_male.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#ffffff" stroke-width="3" stroke="#6bb4df" rx="5" ry="5"></rect>' +
    '<rect x="0" y="0" height="20" width="{w}" fill="#6bb4df" stroke-width="1" stroke="#6bb4df" rx="5" ry="5"></rect>' +
    '<line x1="0" y1="20" x2="250" y2="20" stroke-width="5" stroke="#6bb4df"></line>';
FamilyTree.templates.main_male.img_0 =
    `<use xlink:href="#base_img_0_stroke" /> 
       <circle id="base_img_0_stroke" fill="#6bb4df" cx="45" cy="62" r="37"/>
      <image preserveAspectRatio="xMidYMid slice" clip-path="url(#base_img_0)" xlink:href="{val}" x="10" y="26" width="72" height="72"></image>`;
FamilyTree.templates.main_male_child = Object.assign({}, FamilyTree.templates.main_male);
FamilyTree.templates.main_male_child.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="2px" fill="none" d="{rounded}" />';

FamilyTree.templates.main_female = Object.assign({}, FamilyTree.templates.main_male);
FamilyTree.templates.main_female.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#ffffff" stroke-width="3" stroke="#cb4aaf" rx="5" ry="5"></rect>' +
    '<rect x="0" y="0" height="20" width="{w}" fill="#cb4aaf" stroke-width="1" stroke="#cb4aaf" rx="5" ry="5"></rect>' +
    '<line x1="0" y1="20" x2="250" y2="20" stroke-width="5" stroke="#cb4aaf"></line>';
FamilyTree.templates.main_female.img_0 =
    `<use xlink:href="#base_img_0_stroke" /> 
       <circle id="base_img_0_stroke" fill="#cb4aaf" cx="45" cy="62" r="37"/>
      <image preserveAspectRatio="xMidYMid slice" clip-path="url(#base_img_0)" xlink:href="{val}" x="10" y="26" width="72" height="72"></image>`;
FamilyTree.templates.main_female_child = Object.assign({}, FamilyTree.templates.main_female);
FamilyTree.templates.main_female_child.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="2px" fill="none" d="{rounded}" />';

FamilyTree.templates.single = Object.assign({}, FamilyTree.templates.tommy);
FamilyTree.templates.single.size = [200, 200];
FamilyTree.templates.single.defs = `<style>
                                        .{randId} .bft-edit-form-header, .{randId} .bft-img-button{
                                            background-color: #aeaeae;
                                        }
                                        .{randId}.male .bft-edit-form-header, .{randId}.male .bft-img-button{
                                            background-color: #6bb4df;
                                        }        
                                        .{randId}.male div.bft-img-button:hover{
                                            background-color: #cb4aaf;
                                        }
                                        .{randId}.female .bft-edit-form-header, .{randId}.female .bft-img-button{
                                            background-color: #cb4aaf;
                                        }        
                                        .{randId}.female div.bft-img-button:hover{
                                            background-color: #6bb4df;
                                        }
    </style>`;
FamilyTree.templates.single.node =
    '<circle cx="100" cy="100" r="100" fill="white" stroke-width="1" stroke="#aeaeae"></circle>';
FamilyTree.templates.single.field_0 = '<text ' + FamilyTree.attr.width + ' ="160" style="font-size: 14px;" font-variant="all-small-caps"  font-weight="bold" fill="black" x="100" y="115" text-anchor="middle">{val}</text>';
FamilyTree.templates.single.field_1 = '<text ' + FamilyTree.attr.width + ' ="190" data-text-overflow="multiline" style="font-size: 16px;" fill="black" x="100" y="135" text-anchor="middle">{val}</text>';
FamilyTree.templates.single.field_3 =
    '<text ' + FamilyTree.attr.width + ' ="60" style="font-size: 12px;" fill="black" x="100" y="180" text-anchor="middle">{val}</text>';
FamilyTree.templates.single.nodeMenuButton = `<use ${FamilyTree.attr.control_node_menu_id}="{id}" x="89" y="5" xlink:href="#base_node_menu" />`;
FamilyTree.templates.single_male = Object.assign({}, FamilyTree.templates.single);
FamilyTree.templates.single_male.node = '<circle cx="100" cy="100" r="100" fill="white" stroke-width="3" stroke="#6bb4df" ></circle>';
FamilyTree.templates.single_male.img_0 =
    `<use xlink:href="#base_img_1_stroke"/> 
       <circle id="base_img_1_stroke" fill="#6bb4df" cx="100" cy="62" r="37"/>
      <image preserveAspectRatio="xMidYMid slice" clip-path="url(#base_img_1)" xlink:href="{val}" x="65" y="26" width="72" height="72"></image>`;
FamilyTree.templates.single_female = Object.assign({}, FamilyTree.templates.single_male);
FamilyTree.templates.single_female.node = '<circle cx="100" cy="100" r="100" fill="white" stroke-width="3" stroke="#cb4aaf" ></circle>';
FamilyTree.templates.single_female.img_0 =
    `<use xlink:href="#base_img_1_stroke"/> 
       <circle id="base_img_1_stroke" fill="#cb4aaf" cx="100" cy="62" r="37"/>
      <image preserveAspectRatio="xMidYMid slice" clip-path="url(#base_img_1)" xlink:href="{val}" x="65" y="26" width="72" height="72"></image>`;

FamilyTree.templates.family_single_male = Object.assign({}, FamilyTree.templates.single_male);
FamilyTree.templates.family_single_male.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="2px" fill="none" d="{rounded}" />';
FamilyTree.templates.family_single_female = Object.assign({}, FamilyTree.templates.single_female);
FamilyTree.templates.family_single_female.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="2px" fill="none" d="{rounded}" />';

var family = new FamilyTree(document.getElementById("tree"), {
    template: "main",
    scaleInitial: FamilyTree.match.boundary,
    mouseScrool: FamilyTree.action.none,
    nodeMenu: {
        details: { text: "Details" }
    },
    nodeBinding: {
        field_0: "relationship",
        field_1: "name",
        field_2: "bdate",
        field_3: "id",
        img_0: "img",
    },
    editForm: {
        buttons: {
            edit: null,
            share: {
                icon: FamilyTree.icon.share(24, 24, '#fff'),
                text: 'Share'
            },
            pdf: {
                icon: FamilyTree.icon.pdf(24, 24, '#fff'),
                text: 'Save as PDF'
            },
            remove: {
                icon: FamilyTree.icon.remove(24, 24, '#fff'),
                text: 'Remove',
                hideIfDetailsMode: true
            }
        }
    },
    orderBy: "orderId",
    tags: {
        "single_male": {
            template: "single_male"
        },
        "single_female": {
            template: "single_female"
        },
        "main_female_child": {
            template: "main_female_child"
        },
        "main_male_child": {
            template: "main_male_child"
        },
        "family_single_female": {
            template: "family_single_female"
        },
        "family_single_male": {
            template: "family_single_male"
        }
    }
});

family.on('render-link', function (sender, args) {
    if (args.cnode.ppid != undefined) {
        args.html += '<use xlink:href="#heart" x="' + args.p.xa + '" y="' + args.p.ya + '"/>';
    }
});

family.on('field', function (sender, args) {
    if (args.name == "bdate") {
        if (args.data["ddate"]) {
            var bdate = args.data["bdate"];
            var ddate = args.data["ddate"];
            args.value = bdate + " - " + ddate;
        }
        else args.value = "";
    }

});

family.load([
    { id: 1, pids: [2], orderId: 1, relationship: "Great Great mainfather", name: "Jessie England", img: "https://cdn.balkan.app/shared/m60/1.jpg", bdate: 1800, ddate: 1900 },
    { id: 2, pids: [1], orderId: 2, relationship: "Great Great mainmother", name: "Quinn West", img: "https://cdn.balkan.app/shared/w60/1.jpg", bdate: 1800, ddate: 1900 },
    { id: 3, mid: 1, fid: 2, pids: [6], orderId: 4, relationship: "Great mainfather", name: "Ryan Walmsley", img: "https://cdn.balkan.app/shared/m60/2.jpg", bdate: 1830, ddate: 1930 },

    { id: 4, pids: [5], relationship: "Great Great mainfather", name: "Ray Crook", img: "https://cdn.balkan.app/shared/m60/3.jpg", bdate: 1800, ddate: 1900 },
    { id: 5, pids: [4], relationship: "Great Great mainmother", name: "Shiloh Armstrong", img: "https://cdn.balkan.app/shared/w60/2.jpg", bdate: 1800, ddate: 1900 },
    { id: 6, mid: 4, fid: 5, pids: [3], orderId: 3, relationship: "Great mainmother", name: "Vita Hare", img: "https://cdn.balkan.app/shared/w60/3.jpg", bdate: 1830, ddate: 1930 },

    { id: 7, mid: 3, fid: 6, pids: [14], relationship: "P.mainfather", gender: "male", name: "Ruby Walker", img: "https://cdn.balkan.app/shared/m60/4.jpg", bdate: 1950 },

    { id: 8, pids: [9], relationship: "Great Great mainfather", name: "Courtney Riley", img: "https://cdn.balkan.app/shared/m60/4.jpg", bdate: 1800, ddate: 1900 },
    { id: 9, pids: [8], relationship: "Great Great mainmother", name: "Indiana Collett", img: "https://cdn.balkan.app/shared/w60/5.jpg", bdate: 1800, ddate: 1900 },
    { id: 10, mid: 8, fid: 9, pids: [13], relationship: "Great mainfather", name: "Gill Lyons", img: "https://cdn.balkan.app/shared/m60/5.jpg", bdate: 1830, ddate: 1930 },

    { id: 11, pids: [12], relationship: "Great Great mainfather", name: "Lacey Beck", img: "https://cdn.balkan.app/shared/m60/6.jpg", bdate: 1800, ddate: 1900 },
    { id: 12, pids: [11], relationship: "Great Great mainmother", name: "Erin Ridley", img: "https://cdn.balkan.app/shared/w60/6.jpg", bdate: 1800, ddate: 1900 },
    { id: 13, mid: 11, fid: 12, pids: [10], relationship: "Great mainmother", name: "Emory Wilkins", img: "https://cdn.balkan.app/shared/w60/7.jpg", bdate: 1830, ddate: 1930 },

    { id: 14, mid: 10, fid: 13, pids: [7], relationship: "P.mainmother", gender: "female", name: "Felix Stanley", img: "https://cdn.balkan.app/shared/w60/8.jpg" },

    { id: 15, mid: 14, fid: 7, pids: [1015, 1016], relationship: "Dad", gender: "male", name: "Ronnie Sheldon", img: "https://cdn.balkan.app/shared/m60/7.jpg" },
   

    { id: 101, pids: [102], relationship: "Great Great mainfather", name: "Embry Cheetham", img: "https://cdn.balkan.app/shared/m60/1.jpg", bdate: 1800, ddate: 1900 },
    { id: 102, pids: [101], relationship: "Great Great mainmother", name: "Perry Hilton", img: "https://cdn.balkan.app/shared/w60/9.jpg", bdate: 1800, ddate: 1900 },
    { id: 103, mid: 101, fid: 102, pids: [106], relationship: "Great mainfather", name: "Ollie Bull", img: "https://cdn.balkan.app/shared/m60/7.jpg", bdate: 1830, ddate: 1930 },

    { id: 104, pids: [105], relationship: "Great Great mainfather", name: "Linsay Pye", img: "https://cdn.balkan.app/shared/m60/1.jpg", bdate: 1800, ddate: 1900 },
    { id: 105, pids: [104], relationship: "Great Great mainmother", name: "Flynn Temple", img: "https://cdn.balkan.app/shared/w60/8.jpg", bdate: 1800, ddate: 1900 },
    { id: 106, mid: 104, fid: 105, pids: [103], relationship: "Great mainmother", name: "Perry Reese", img: "https://cdn.balkan.app/shared/w60/1.jpg", bdate: 1830, ddate: 1930 },

    { id: 107, mid: 103, fid: 106, pids: [1014], relationship: "P.mainfather", gender: "male", name: "Abby Alford", img: "https://cdn.balkan.app/shared/m60/3.jpg" },

    { id: 108, pids: [109], relationship: "Great Great mainfather", gender: "male", name: "Sheikh Preston", img: "https://cdn.balkan.app/shared/m60/4.jpg", bdate: 1800, ddate: 1900 },
    { id: 109, pids: [108], relationship: "Great Great mainmother", gender: "female", name: "Amara Frey", img: "https://cdn.balkan.app/shared/w60/3.jpg", bdate: 1800, ddate: 1900 },
    { id: 1010, mid: 108, fid: 109, pids: [1013], relationship: "Great mainmother", gender: "female", name: "Caden Mullen", img: "https://cdn.balkan.app/shared/w60/7.jpg", bdate: 1830, ddate: 1930 },

    { id: 1011, pids: [1012], relationship: "Great Great mainfather", gender: "male", name: "Rosemarie Nelson", img: "https://cdn.balkan.app/shared/m60/2.jpg", bdate: 1800, ddate: 1900 },
    { id: 1012, pids: [1011], relationship: "Great Great mainmother", gender: "female", name: "Addison Wyatt", img: "https://cdn.balkan.app/shared/w60/5.jpg", bdate: 1800, ddate: 1900 },
    { id: 1013, mid: 1011, fid: 1012, pids: [1010], relationship: "Great mainfather", gender: "male", name: "Kendal Waters", img: "https://cdn.balkan.app/shared/m60/1.jpg", bdate: 1830, ddate: 1930 },

    { id: 1014, mid: 1010, fid: 1013, pids: [107], relationship: "P.mainmother", gender: "female", name: "Zion Pacheco", img: "https://cdn.balkan.app/shared/w60/2.jpg" },

    { id: 1015, mid: 1014, fid: 107, pids: [15], relationship: "Mom", gender: "female", name: "Haiden Fountain", img: "https://cdn.balkan.app/shared/w60/9.jpg" },

    { id: 2001, mid: 1015, fid: 15, pids: [2007], relationship: "Sister", gender: "female", name: "Shelley Moody", img: "https://cdn.balkan.app/shared/w60/4.jpg" },
    { id: 2007, pids: [2001], tags: ["left-partner"], relationship: "Spouse", gender: "male", name: "Bobby Carrillo", img: "https://cdn.balkan.app/shared/m60/1.jpg" },
    { id: 3001, fid: 2007, mid: 2001, tags: ["single_male"], relationship: "Child", gender: "male", name: "Rogan Norris", img: "https://cdn.balkan.app/shared/m60/2.jpg" },
    { id: 2002, mid: 1015, fid: 15, pids: [2005, 2006], relationship: "Myself", gender: "male", name: "Joni Emerson", img: "https://cdn.balkan.app/shared/m60/3.jpg" },
    { id: 2005, pids: [2002], fid: 1500, mid: 1501, relationship: "Wife2", gender: "female", name: "Remi Prince", img: "https://cdn.balkan.app/shared/w30/12.jpg" },
    { id: 3002, fid: 2002, mid: 2005, tags: ["family_single_male"], relationship: "Child", gender: "male", name: "Storm Dougherty", img: "https://cdn.balkan.app/shared/m10/1.jpg" },
    { id: 2006, pids: [2002], fid: 1502, mid: 1503, relationship: "First Wife", gender: "female", name: "Brittany Nicholls", img: "https://cdn.balkan.app/shared/w30/13.jpg" },
    { id: 3003, fid: 2002, mid: 2006, pids: [3007], tags: ["main_female_child"], relationship: "Child 1", gender: "female", name: "Cody Costa", img: "https://cdn.balkan.app/shared/w10/2.jpg" },
    { id: 3007, pids: [3003], tags: ["left-partner"], relationship: "Spouse", gender: "male", name: "Jude Bostock", img: "https://cdn.balkan.app/shared/w30/14.jpg" },
    { id: 4001, fid: 3007, mid: 3003, tags: ["family_single_female"], relationship: "mainchild", gender: "female", name: "Jamie-Leigh Mcmahon", img: "https://cdn.balkan.app/shared/w10/3.jpg" },

    { id: 3004, fid: 2002, mid: 2006, pids: [3008], tags: ["main_male_child"], relationship: "Child 2", gender: "male", name: "Deniz Ferry", img: "https://cdn.balkan.app/shared/m10/2.jpg" },
    { id: 3008, pids: [3004], relationship: "Spouse", gender: "female", name: "Hareem Hyde", img: "https://cdn.balkan.app/shared/w30/15.jpg" },
    { id: 4002, fid: 3004, mid: 3008, tags: ["family_single_female"], relationship: "mainchild", gender: "female", name: "Jaylen Olson", img: "https://cdn.balkan.app/shared/w10/4.jpg" },
    { id: 4003, fid: 3004, mid: 3008, tags: ["family_single_male"], relationship: "mainchild", gender: "male", name: "Emaan Green", img: "https://cdn.balkan.app/shared/m10/3.jpg" },
   
   
    { id: 3005, fid: 2002, mid: 2006, tags: ["family_single_female"], relationship: "Child 3", gender: "female", name: "Sana Cervantes", img: "https://cdn.balkan.app/shared/2.jpg" },

    { id: 2003, mid: 1015, fid: 15, pids: [2008], relationship: "Brother", gender: "male", name: "Blessing Whitaker", img: "https://cdn.balkan.app/shared/9.jpg" },
    { id: 2008, pids: [2003], relationship: "wife", gender: "female", name: "Eli Pearce", img: "https://cdn.balkan.app/shared/2.jpg" },

    { id: 1500, pids: [1501], relationship: "Father in Law", gender: "male", name: "Lennie Allan", img: "https://cdn.balkan.app/shared/9.jpg" },
    { id: 1501, pids: [1500], relationship: "Mother in Law", gender: "female", name: "Kacie Easton", img: "https://cdn.balkan.app/shared/2.jpg" },
    { id: 1502, pids: [1503], relationship: "Father in Law", gender: "male", name: "Verity Acevedo", img: "https://cdn.balkan.app/shared/9.jpg" },
    { id: 1503, pids: [1502], relationship: "Mother in Law", gender: "female", name: "Sol Rankin", img: "https://cdn.balkan.app/shared/2.jpg" },
]);
