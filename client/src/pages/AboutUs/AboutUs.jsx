import "./../../styles/AboutUs.css";
const AboutUs = () => {
    return (
        <div className="AboutUs">
            <h1>hello from about us </h1>

            <div className="Header">
                <h1>À Propos</h1>
            </div>
            {/* histoire de pimwoods */}

            <div className="Histoir">
                <div className="left">
                    <h1>Fondée en 2013,</h1>
                    <h2><span>PimWoods</span> a évolué d’un simple exportateur de <span> bois de hêtre </span> avec la société SARL Pim à un fabricant de meubles modernes et solides de premier plan</h2>
                </div>
                <div className="right">
                    <h3>Notre aventure a commencé par une passion pour la transformation du <span>bois de hêtre</span> brut en magnifiques produits finis. Inspiré par la beauté de ce bois noble, notre fondateur a décidé de créer <span>PimWoods</span>.</h3>
                    <p>
                        Au départ, nous créions des designs et sous-traitions la production à d’autres entreprises de menuiserie. Cependant, poussés par notre passion et notre engagement envers la qualité, nous avons progressivement développé nos propres capacités de production. Aujourd’hui,<span>PimWoods</span>gère toutes les étapes de la fabrication des meubles, du bois brut au produit fini, garantissant un savoir-faire exceptionnel et une qualité inégalée.</p>
                </div>

            </div>
            {/* la mission et la vision   de pimwoods */}

            <div className="Mission">
                <div className="Up">
                    <div className="left"> <h1>Notre <span>Mission</span>  et Vision</h1>
                    </div>
                    <p>Créer des meubles beaux, durables et fonctionnels qui améliorent les espaces de vie et enrichissent les vies</p>
                </div>
                <div className="down">
                    <p> Améliorer la qualité et la sécurité de vie grâce à nos meubles, en proposant des designs modernes qui allient esthétique et praticité</p>
                </div>
            </div>
            {/* les 4 valeur de de pimwoods */}
            <div className="Valeur">
                <h1 className="left">Nos
                    Valeurs</h1>
                <div className="right">
                    <h1 id="Qualite">Qualité</h1>
                    <h1 id="Innovation">Innovation</h1>
                    <h1 id="Durabilite">Durabilité</h1>
                    <h1 id="client">Satisfaction Client</h1>
                </div>

            </div>
        </div>
    );
}

export default AboutUs;