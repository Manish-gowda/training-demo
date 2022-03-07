const {Op} =require("sequelize");

const {Movie} = require('../models');

const getAllMovies = async(req, res) => {
    const{searchText} = req.query;
    try
        {
            const conditions = searchText ? {
            where:{
                title: {
                    [Op.iRegexp] : searchText
                }
            }
        }: {};
        const movies = await Movie.findAll(conditions);
        return res.json(movies);
        
    }
    catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
}

const getMovie = async(req, res) => {
    const { movieId } = req.params;

    try {
        const movie = await Movie.findOne({
            where:{
            id:Number(movieId)

            }
        });
        if (!movie) throw new Error("movie not exist");
        res.json({
            message: "Movie Exists",
            movie
        });
    }
    catch (e) {
        res.status(404).json({
            message: e.message
        });
    }

}

const addMovie = async (req,res) => {
    const {title,poster,ratings} = req.body;

    try{
        const createdMovie = await Movie.create({
            title,
            ratings,
            poster
        });
        return res.json({
            message:'Movie Created',
            movie: createdMovie
        })
    }
    catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
    
}

module.exports = {
    getAllMovies,
    getMovie,
    addMovie
};
