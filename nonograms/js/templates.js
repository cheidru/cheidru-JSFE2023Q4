// https://146.azurewebsites.net/nonograms-katana-5x5/

const easyTemplate = [
    {
        name: 'dog',
        clueTop: [[1],[3],[2],[5],[1]],
        clueLeft: [[1],[1,3],[3],[1,1],[1,1]],
        picture: 
        [[0,0,0,1,0],
        [1,0,1,1,1],
        [0,1,1,1,0],
        [0,1,0,1,0],
        [0,1,0,1,0]]
    },
    {
        name: 'flag',
        clueTop: [[5],[1,1],[3],[1,1],[3]],
        clueLeft: [[5],[1,1,1],[5],[1],[1]],
        picture: 
        [[1,1,1,1,1],
        [1,0,1,0,1],
        [1,1,1,1,1],
        [1,0,0,0,0],
        [1,0,0,0,0]]
    },
    {
        name: 'tower',
        clueTop: [[2],[4],[3,1],[4],[2]],
        clueLeft: [[1,1,1],[5],[3],[1,1],[3]],
        picture: 
        [[1,0,1,0,1],
        [1,1,1,1,1],
        [0,1,1,1,0],
        [0,1,0,1,0],
        [0,1,1,1,0]]
    },
    {
        name: 'rune',
        clueTop: [[3],[1,1,1],[5],[1],[2]],
        clueLeft: [[2],[1],[5],[1,1,1],[3]],
        picture: 
        [[0,1,1,0,0],
        [0,0,1,0,0],
        [1,1,1,1,1],
        [0,0,1,0,1],
        [1,1,1,0,0]]
    },
    {
        name: 'tree',
        clueTop: [[1],[2,1],[5],[2,1],[1]],
        clueLeft: [[1],[3],[5],[1],[3]],
        picture: 
        [[0,0,1,0,0],
        [0,1,1,1,0],
        [1,1,1,1,1],
        [0,0,1,0,0],
        [0,1,1,1,0]]
    }
];

const mediumTemplate = [
    {
        name: 'postcard',
        clueTop: [[10],[1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1],[1,1],[1,1,1],[1,1],[10]],
        clueLeft: [[10],[1,1],[1,1,1],[1,3,1],[1,1],[1,3,1],[1,1],[1,3,1],[1,1],[10]],
        picture: 
        [[1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,1,0,1],
        [1,0,1,1,1,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1],
    ]
    },
    {
        name: 'home',
        clueTop: [[6],[7],[8],[9],[5,3],[5,3],[9],[8],[7],[6]],
        clueLeft: [[2],[4],[6],[8],[10],[4,4],[4,4],[10],[10],[10]],
        picture: 
        [[0,0,0,0,1,1,0,0,0,0],
        [0,0,0,1,1,1,1,0,0,0],
        [0,0,1,1,1,1,1,1,0,0],
        [0,1,1,1,1,1,1,1,1,0],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,0,0,1,1,1,1],
        [1,1,1,1,0,0,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
    ]
    },
    {
        name: 'cup',
        clueTop: [[1],[5,1],[2,7],[1,4],[2,7],[7],[2,7],[5,1],[1,1,1],[2,1]],
        clueLeft: [[1,0,1],[1,1,1],[0,1,0],[7],[2,6],[2.4,1],[8],[7],[1,5,1],[8]],
        picture: 
        [[0,0,1,0,0,0,1,0,0,0],
        [0,0,1,0,1,0,1,0,0,0],
        [0,0,0,0,1,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,0,0],
        [0,1,1,0,1,1,1,1,1,1],
        [0,1,1,0,1,1,1,1,0,1],
        [0,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,0,0],
        [0,0,1,1,1,1,1,0,0,0],
        [1,1,1,1,1,1,1,1,1,1],
    ]
    },
    {
        name: 'ambulance',
        clueTop: [[5,1],[2,3,1],[1,2,2],[8,1],[7,1],[6,1],[2,3,1],[1,3,1],[2,3,2],[7,1]],
        clueLeft: [[2],[9],[2,4,2],[7],[2,6],[2.4,1],[8],[7],[1,5,1],[8]],
        picture: 
        [[0,0,0,1,1,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1],
        [1,1,0,1,1,1,1,0,1,1],
        [1,0,0,1,1,1,0,0,0,1],
        [1,0,0,1,1,1,1,0,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [0,1,0,1,0,0,0,1,0,1],
        [0,0,1,0,0,0,0,0,1,0],
        [1,1,1,1,1,1,1,1,1,1],
    ]
    },
    {
        name: 'mouse',
        clueTop: [[3],[2,1],[1,1,5],[1,8],[2,6],[3,4],[2,6],[1,8],[1,1,5],[2,3]],
        clueLeft: [[2,2],[1,1,1,1],[1,5,1],[2,1,2],[5],[3,3],[1,8],[1,8],[1,8],[8]],
        picture: 
        [[0,0,1,1,0,0,0,1,1,0],
        [0,1,0,0,1,0,1,0,0,1],
        [0,1,0,1,1,1,1,1,0,1],
        [0,0,1,1,0,1,0,1,1,0],
        [0,0,0,1,1,1,1,1,0,0],
        [0,0,1,1,1,0,1,1,1,0],
        [1,0,1,1,1,1,1,1,1,1],
        [1,0,1,1,1,1,1,1,1,1],
        [1,0,1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,1,1,0],
    ]
    }
];

const hardTemplate = [
    {
        name: 'flower',
        clueTop: [[3,3],[2,2,2,1],[1,1,4],[3,1,1,2],[1,1,1,2,1],[2,5,2],[1,2,3,4],[2,5,1],[2,1,2,1],[1,1,1,3],[1,4,5],[2,2,3,1],[3,2,2],[1,4],[4]],
        clueLeft: [[2,2],[1,5],[3,1,2],[2,3,1],[1,2,1,2],[3,1,3],[3,1,1],[1,3,1],[9,1],[2,2,2,1],[3,1,1,5],[1,1,3,6],[3,1,3,2],[5,3,2],[3,3]],
        picture: 
        [[0,0,0,1,1,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,1,0,0,0,1,1,1,1,1,0,0,0],
        [0,1,1,1,0,0,0,0,1,0,0,1,1,0,0],
        [1,1,0,0,1,1,1,0,0,0,0,0,1,0,0],
        [1,0,0,0,0,1,1,0,1,0,0,1,1,0,0],
        [1,1,1,0,1,0,1,1,0,1,1,1,0,0,0],
        [0,1,1,1,0,0,1,0,0,0,1,0,0,0,0],
        [0,0,1,0,0,1,1,1,0,0,1,0,0,0,0],
        [0,0,1,1,1,1,1,1,1,1,1,0,0,1,0],
        [1,1,0,0,1,1,0,1,1,0,0,0,0,0,1],
        [1,1,1,0,0,1,0,1,0,0,1,1,1,1,1],
        [1,0,1,0,0,1,1,1,0,1,1,1,1,1,1],
        [0,1,1,1,0,0,1,0,0,1,1,1,0,1,1],
        [0,0,1,1,1,1,1,0,1,1,1,0,1,1,0],
        [0,0,0,0,0,1,1,1,0,0,1,1,1,0,0],
    ]
    },
    {
        name: 'alarm',
        clueTop: [[3],[3,3,1],[3,3,3,1,1],[2,4,4,1],[1,10,1],[5,5],[6,6],[1,3,2,2],[5,7],[3,7],[1,2,7,1],[2,4,4,1],[3,3,3,1,1],[3,3,1],[3]],
        clueLeft: [[3,3],[3,3,3],[3,3,3,3],[2,4,4,2],[1,8,2,1],[7,3],[7,5],[1,1,3,1],[13],[11],[5,5],[4,4],[1,5,1],[1,1,3,1,1],[2,2]],
        picture: 
        [[0,0,1,1,1,0,0,0,0,0,1,1,1,0,0],
        [0,1,1,1,0,0,1,1,1,0,0,1,1,1,0],
        [1,1,1,0,1,1,1,0,1,1,1,0,1,1,1],
        [1,1,0,1,1,1,1,0,1,1,1,1,0,1,1],
        [1,0,1,1,1,1,1,1,1,1,0,1,1,0,1],
        [0,0,1,1,1,1,1,1,1,0,1,1,1,0,0],
        [0,1,1,1,1,1,1,1,0,1,1,1,1,1,0],
        [0,1,0,0,1,0,0,0,1,1,1,0,0,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
        [0,0,0,1,1,1,1,0,1,1,1,1,0,0,0],
        [0,0,1,0,0,1,1,1,1,1,0,0,1,0,0],
        [0,1,0,0,1,0,1,1,1,0,1,0,0,1,0],
        [0,0,1,1,0,0,0,0,0,0,0,1,1,0,0],
    ]
    },
    {
        name: 'church',
        clueTop: [[15],[8],[7,1],[6,1,4],[5,1],[5,1],[1,2,3],[1,4],[1,2,3],[5,1],[5,1],[6,1,4],[7,1],[8],[15]],
        clueLeft: [[7,7],[6,6],[7,7],[7,7],[6,6],[4,4],[3,3],[2,1,1,1,1,2],[1,1],[1,1,1,1],[1,3,1,3,1],[1,1,3,1,1],[1,1,3,1,1],[1,3,1],[1,1]],
        picture: 
        [[1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,0,0,0,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,0,0,0,1,1,1,1,1,1],
        [1,1,1,1,0,0,0,0,0,0,0,1,1,1,1],
        [1,1,1,0,0,0,0,0,0,0,0,0,1,1,1],
        [1,1,0,1,0,1,0,1,0,1,0,1,0,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,1,0,0,0,0,0,0,0,1,0,0,1],
        [1,0,1,1,1,0,0,1,0,0,1,1,1,0,1],
        [1,0,0,1,0,0,1,1,1,0,0,1,0,0,1],
        [1,0,0,1,0,1,1,1,1,0,0,1,0,0,1],
        [1,0,0,0,0,0,1,1,1,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    ]
    },
    {
        name: 'duck',
        clueTop: [[3],[4],[5],[4],[5],[6],[3,2,1],[2,2,5],[4,2,6],[8,2,3],[8,2,1,1],[2,6,2,1],[4,6],[2,4],[1]],
        clueLeft: [[3],[5],[4,3],[7],[5],[3],[5],[1,8],[3,3,3],[7,3,2],[5,4,2],[8,2],[10],[2,3],[6]],
        picture: 
        [[0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,1,1,1,1,0,1,1,1],
        [0,0,0,0,0,0,0,1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,1,1,1,1,1,0,0],
        [1,0,0,0,0,0,1,1,1,1,1,1,1,1,0],
        [1,1,1,0,0,1,1,1,0,0,0,1,1,1,0],
        [1,1,1,1,1,1,1,0,1,1,1,0,1,1,0],
        [0,1,1,1,1,1,0,1,1,1,1,0,1,1,0],
        [0,1,1,1,1,1,1,1,1,0,0,1,1,0,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,0,1,1,0,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,1,1,0,0,0],
    ]
    },
    {
        name: 'clover',
        clueTop: [[2,2],[7],[7,2],[7,2],[3,5,1],[5,3,2],[6,1,2],[6,4],[6,1],[5,3],[3,5],[7],[7],[7],[2,2]],
        clueLeft: [[2,2],[7],[7],[7],[5],[3],[5],[1,8],[3,3,3],[7,3,2],[5,4,2],[8,2],[10],[2,3],[6]],
        picture: 
        [[0,0,0,0,0,1,1,0,0,1,1,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
        [0,1,1,1,0,1,1,1,1,1,0,1,1,1,0],
        [1,1,1,1,1,0,1,1,1,0,1,1,1,1,1],
        [1,1,1,1,1,1,0,1,0,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,0,1,1,1,1,1,1,0],
        [1,1,1,1,1,1,0,1,0,1,1,1,1,1,1],
        [1,1,1,1,1,0,0,1,0,0,1,1,1,1,1],
        [0,1,1,1,0,0,0,1,0,0,0,1,1,1,0],
        [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,0,0,0,0,0,0,0,0,0],
        [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0],
    ]
    },
]