const technos = [
    {
        "title": "Programmation",
        "techs": [
            {
                "name": "Algorithmique et Structure de donnees",
                "path": "algorithms",
                "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/thealgorithms/thealgorithms-original.svg",
                "description": "Coding, OOP, Design patterns"
            }
        ]
    },
    {
        "title": "Language de programmation ",
        "techs": [
            {
                "name": "TypeScript",
                "slug": "typescript",
                "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                "description": "JavaScript typé à toutes échelles"
            },
            {
                "name": "Python",
                "slug": "python",
                "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
                "description": "Langage de programmation et de scripting"
            },
            {
                "name": "PHP",
                "slug": "php",
                "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
                "description": "Langage optimisé pour les applications rapides"
            },
            {
                "name": "C/C++",
                "slug": "c-cpp",
                "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
                "description": "Langage optimisé pour les applications rapides"
            },
            {
                "name": "Rust",
                "slug": "rust",
                "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
                "description": "Rust est un langage de programmation compilé multi-paradigme qui a été conçu pour être « un langage fiable, concurrent, pratique », supportant les styles de programmation purement fonctionnel, modèle d'acteur, procédural, ainsi qu'orienté objet sous certains aspects"
            },
        ]
    },
    {
        "title": "Framework",
        "techs": [
            {
                "name": "Laravel",
                "slug": "laravel",
                "image": "/images/techs/laravel.svg",
                "description": "Laravel est un framework web open-source écrit en PHP respectant le principe modèle-vue-contrôleur et entièrement développé en programmation orientée objet."
            },
            {
                "name": "Express Js",
                "slug": "express-js",
                "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                "description": "Express.js est un framework pour construire des applications web basées sur Node.js. C'est de fait le framework standard pour le développement de serveur en Node.js ."
            },

            {
                "name": "Nest Js",
                "slug": "nest-js",
                "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
                "description": "NestJs est un progressive Node.js framework robuste qui vous permet de créer des applications web fiables, efficaces et évolutive."
            },
            {
                "name": "Fast Api",
                "slug": "fast-api",
                "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
                "description": "FastAPI est un framework Web pour développer des API RESTful en Python. FastAPI est basé sur Pydantic et des indications de typage pour valider, sérialiser et désérialiser les données, puis générer automatiquement des documents OpenAPI."
            },
        ]
    },
    {
        "title": "Testing",
        "techs": [
            {
                "name": "Jest",
                "slug": "jest",
                "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
                "description": "Framework de test JavaScript"
            },
            {
                "name": "PyTest",
                "slug": "pytest",
                "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg",
                "description": "Pytest est un framework de test Python utilisé pour écrire divers types de tests logiciels, notamment des tests unitaires, des tests d'intégration, des tests de bout en bout et des tests fonctionnels"
            },
            {
                "name": "PHPUnit",
                "slug": "phpunit",
                "image": "phpunit.png",
                "description": "PHPUnit est un framework open source de tests unitaires dédié au langage de programmation PHP. Il permet l'implémentation des tests de régression en vérifiant que les exécutions correspondent aux assertions prédéfinies"
            }
        ]
    },
    {
        "title": "Base de données",
        "techs": [
            {
                "name": "MySQL",
                "slug": "mysql",
                "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                "description": "Système de gestion de base de données relationnelle"
            },
            {
                "name": "PostgresSQL",
                "slug": "postgresql",
                "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                "description": "Système de gestion de base de données relationnelle"
            },
            {
                "name": "Redis",
                "slug": "redis",
                "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
                "description": "InMemory Database"
            },
            {
                "name": "Mongo Db",
                "slug": "mongo-db",
                "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
                "description": "Base de données NoSQL orienté documents"
            }
        ]
    },
    {
        "title": "DevOps",
        "techs": [
            {
                "name": "Docker",
                "slug": "docker",
                "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
                "description": "Plateforme de conteneurisation"
            },
            {
                "name": "Github Actions",
                "slug": "github-actions",
                "image": "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.2.0/githubactions.svg",
                "description": "CI/CD by Github"
            },
            {
                "name": "Kubernetes",
                "slug": "kubernetes",
                "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
                "description": "Système Open source qui offre des fonctionalités permettant d'automatiser le déploiement, la montée en charge  et la mise en oeuvre des containers d'applications sur des clusters de serveurs. "
            },
            {
                "name": "Istio",
                "slug": "istio",
                "image": "/images/techs/istio.svg",
                "description": "Plateforme Open source de service Mesh qui permet de contrôler la manière dont les données sont partagées entre les microservices"
            },
        ]
    },
    {
        "title": "Cloud",
        "techs": [
            {
                "name": "Google Cloud",
                "slug": "google-cloud",
                "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
                "description": "Google Cloud: Cloud Computing Services"
            },
            {
                "name": "Firebase",
                "slug": "firebase",
                "image": "/images/techs/firebase.svg",
                "description": "Fun Cloud"
            },
            {
                "name": "DigitalOcean",
                "slug": "digitalocean",
                "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
                "description": "Digitalocean est un fournisseur d'infrastructure cloud"
            },
            {
                "name": "Amazon Web Service (AWS)",
                "slug": "aws",
                "image": "/images/techs/aws.svg",
                "description": "AWS est une division du géant Américain AMAZON, qui fournit des services de cloud computing à la demande pour des entreprises et même pour patucliers "
            },
            {
                "name": "Terraform",
                "slug": "terraform",
                "image": "/images/techs/terraform.svg",
                "description": "Environnement de logiciel (Infrastructure As Code) qui permet d'automatiser la construction des resources d'une infrastructure de centres de données comme un réseau, des machines virtuelles, des bases de données et bien d'autres. "
            },
        ]
    },
    {
        "title": "Backend",
        "techs": [
            {
                "name": "RabbitMQ",
                "slug": "rabbitmq",
                "image": "/images/techs/rabbitmq.svg",
                "description": "Message Queue"
            },
            {
                "name": "Grafana",
                "slug": "grafana",
                "image": "/images/techs/grafana.svg",
                "description": "Grafana est un logiciel libre qui permet la visualisation de données. Il permet de réaliser des tableaux de bord et des graphiques depuis plusieurs sources dont des bases de données temporelles comme Graphite, InfluxDB et OpenTSDB"
            },
            {
                "name": "Prometheus",
                "slug": "prometheus",
                "image": "/images/techs/prometheus.svg",
                "description": "Prometheus est un logiciel libre de surveillance informatique et générateur d'alertes. Il enregistre des métriques en temps réel dans une base de données de séries temporelles en se basant sur le contenu de point d'entrée exposé à l'aide du protocole HTTP"
            },
            {
                "name": "Elasticsearch (ELK)",
                "slug": "elasticsearch",
                "image": "/images/techs/elk.svg",
                "description": "La suite ELK permet d'agréger les journaux de tous systèmes et applications, de les analyser, et de créer des visualisations pour la surveillance des applications et de l'infrastructure, un dépannage plus rapide, l'analytique de la sécurité et bien d'autres fonctionalités"
            },
            {
                "name": "Nginx",
                "slug": "nginx",
                "image": "/images/techs/nginx.svg",
                "description": "Seveur Web, reverse proxy, load balance"
            },
            {
                "name": "Traefik",
                "slug": "traefik",
                "image": "/images/techs/traefik.svg",
                "description": "Traefik est un reverse proxy HTTP moderne et un répartiteur de charge qui facilite le déploiement de micro services. Traefik est gratuit, OpenSource et SelfHosted."
            },
        ]
    },
    {
        "title": "Tools",
        "techs": [
            {
                "name": "Git",
                "slug": "git",
                "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                "description": "Version Control"
            },
            {
                "name": "Vagrant",
                "slug": "vagrant",
                "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vagrant/vagrant-original.svg",
                "description": "Gestionnaire d'environnement"
            }
        ]
    },
    {
        "title": "Editeur | IDE",
        "techs": [
            {
                "name": "Jetbrains",
                "slug": "jetbrains",
                "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg",
                "description": "IDE et outils de developpement"
            }
        ]
    }
];

export default technos