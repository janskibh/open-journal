import React, { useState } from 'react';

import axios from 'axios';
import './SearchUser.css';

const SearchUser = () => {
    const [searchData, setSearchData] = useState("");
    const [searchResult, setSearchResult] = useState(null); // Utilisez null comme valeur initiale pour les résultats de recherche
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setSearchData(e.target.value); // Assurez-vous d'utiliser e.target.value pour obtenir la valeur de l'input
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSearchResult(null); // Réinitialiser les résultats de recherche
        setErrorMessage('');
        try {
            const response = await axios.get(`http://10.59.100.59:3059/users/${encodeURIComponent(searchData)}`);
            setSearchResult(response.data); // Stockez la donnée JSON directement
        } catch (error) {
            setErrorMessage("Aucun résultat");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="text-input"><input type="text" name="search" value={searchData} onChange={handleChange} placeholder="username" required /></div>
                <div><button type="submit">Rechercher</button></div>
            </form>
            {/* Afficher searchResult sous forme de tableau ou de liste */}
            {searchResult && (
                <div>
                    <div>{searchResult.id}</div>
                    <div>{searchResult.username}</div>
                    <div>{searchResult.email}</div>
                    <div>{searchResult.created_at}</div>
                </div>
            )}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    );
}

export default SearchUser;

