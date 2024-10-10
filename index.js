
const collection = [
    {
        title: 'Rear Window',
        year: 1954,
        director: 'Alfred Hitchcock',
        digitalCode: null,
        genreTags: ['Mystery', 'Suspense'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: "Rear Window Ethics: An Original Documentary"
            },
            {
                type: 'Commentary',
                title: 'Feature Commentary with John Fawell'
            },
            {
                type: 'Interview',
                title: 'Hitchcock/Truffaut Interview Excerpts'
            }
        ]
    },
    {
        title: 'Psycho',
        year: 1960,
        director: 'Alfred Hitchcock',
        digitalCode: null,
        genreTags: ['Horror', 'Suspense'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: 'The Making of Psycho'
            },
            {
                type: 'Commentary',
                title: 'Feature Commentary with Stephen Rebello'
            }
        ]
    },
    {
        title: 'The Thing',
        year: '1982',
        director: 'John Carpenter',
        digitalCode: null,
        genreTags: ['Horror', 'Science Fiction'],
        specialFeatures: [
            {
                type: 'Commentary',
                title: 'Feature Commentary with Star Kurt Russell and Director John Carpenter'
            },
        ]
    },
    {
        title: 'Big Trouble in Little China',
        year: 1986,
        director: 'John Carpenter',
        digitalCode: null,
        genreTags: ['Comedy', 'Fantasy'],
        specialFeatures: [
            {
                type: 'Commentary',
                title: 'Audio Commentary with Director John Carpenter and Actor Kurt Russell'
            },
            {
                type: 'Alternate Edits',
                title: 'Deleted Scenes'
            },
            {
                type: 'Interview',
                title: 'Vintage Interviews with Cast and Crew'
            }
        ]
    },
    {
        title: 'Fright Night',
        year: 1985,
        director: 'Tom Holland',
        digitalCode: null,
        genreTags: ['Horror', 'Vampire'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: "'You're So Cool, Brewster!' Documentary"
            },
            {
                type: 'Interview',
                title: 'First Ever Fright Night Reunion Panel'
            }
        ]
    }
];


// PROBLEM #1 //
const setDigitalCode = function(array, value){

for (var i = array.length - 1; i >= 0; i -= 2) {
    array[i].digitalCode = value;
}
   return array;
};

// PROBLEM #2 //

const filterByGenreTag = function(array, tag){
    return array.filter(function(movie){
    return movie.genreTags.includes(tag)
});
}



// PROBLEM #3 //

const filterBySpecialFeatureType = function(array, type){
    return array.filter(function(movie) {
        // look at this without the .some function - see below
        return movie.specialFeatures.some(function(feature) {
            return feature.type === type;
        });
    });
    
};
//  for (let i = 0; i < movie.specialFeatures.length; i++) {
//     if (movie.specialFeatures[i].type === type) {
//         return true:
//     }
//     return false;
 //}


// PROBLEM #4 //

const getTopSpecialFeature = function(array, title){
    function findMovie(index) {
        if (index >= array.length) {
            return "no movie matching that title";
        }
        // check if the current movie matches the title
    if (array[index].title === title) {
        if (array[index].speciaFeatures.length > 0){
            return array[index].title + "special features: " + array[index].speciaFeatures[0].title;
        } else {
            return array[index].title + 'has no special features.';
        }
    }
    return findMovie(index + 1);
};
return findMovie(0);
}
//  //Ben's solution:
//  const getTopSpecialFeature = function(array, title){
//  if (index >= array.length) {
//     return 'no matching title found'
//  }
//  if (array[index]['title'] === title) {
//     return array [index].title + " Special Feature: " + array.specialFeatures(0).title;
//  }//recursion
//  return getTopSpecialFeature(array, title, index + 1);
// }

// Must be able to do a recursive function that iterates through an array

// PROBLEM #5 //

const mapTitles = function(array){
    return array.map(function(movie) {
        return movie.title + ' (' + movie.year + ') - dir. ' + movie.director;
    });
};


// PROBLEM #6 //

const mapSpecialFeatures = function(array){
    return array.map(function(movie) {
        return movie.specialFeatures.map(function(feature) {
            return feature.title;
        });
    });
    
};
mary Alice's answer: 
return array.map(function(movie)
return movie.specialFeatures.map(feature )
let output = []
for (let i = 0; i < movie.specialFeatures.length; i++) {
    output.push(movie.specialFeatures[i].title);
} return output;
)


// PROBLEM #7 //

const createNonsenseString = function(array, index){
    return array.reduce(function(accumulator, movie) {
        if (movie.title.length > index) {
            return accumulator + movie.title.charAt(index);
        }
        return accumulator;
    }, '');
    
};

// PROBLEM #8 //

const getValues = function(object, props){
    var values = [];

    for (var i = 0; i < props.length; i++) {
        var key = props[i];
        // Push the value to the values array if the key exists in the object
        if (key in object) {
            values.push(object[key]);
        }
    }

    return values;
};
peyton's answer: 
let outputArr = [];
for (let key of props) {
    outputArr.push(object[key])
}
return outputArr
Could us .map method here to iterate over props.
