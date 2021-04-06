const {Router} = require('express')
const router = Router()
const User = require("../../models/User");
const Movie = require('../../models/Movie')

router.post('/add', async (req, res) => {
    try {
        const {movie, userId} = req.body

        movie.isWatchedAlredy = false
        movie.myVote = 0
        movie.myComment = ''

        //find current user
        User.findById(userId)
            .then(user => {
                //is film exist in collection
                let isMovie = user.movies.find(item => item.id === movie.id)
                if(!isMovie){
                    user.movies.push(movie)
                    user.save()
                    res.json(user)
                } else {
                    res.json({err: "This movie already in your collection"})
                }
            })
            .catch(err => {
                res.json(err)
            })

    } catch (e){
        console.log('Some add error', e)
    }
})

module.exports = router