const topics = [
    {
        "title": "Programmation",
        "techs": [
            {
                "name": "Algorithmique et Structure de donnees",
                "image": "code.svg",
                "description": "Coding, OOP, Design patterns"
            },
            {
                "name": "RxJs / RxJava",
                "image": "reactivex.svg",
                "description": "Programmation Reactive"
            }
        ]
    },
    {
        "title": "Language de programmation ",
        "techs": [
            {
                "name": "Java",
                "image": "java.svg",
                "description": "Langage de programmation orienté objet"
            },
            {
                "name": "Javascript",
                "image": "javascript.svg",
                "description": "langage de programmation"
            },
            {
                "name": "Typescript",
                "image": "typescript.svg",
                "description": "JavaScript typé à toutes échelles"
            },
            {
                "name": "Python",
                "image": "python.svg",
                "description": "Langage de programmation et de scripting"
            },
            {
                "name": "Dart",
                "image": "dart.svg",
                "description": "Langage optimisé pour les applications rapides"
            }
        ]
    },
    {
        "title": "Dev",
        "techs": [
            {
                "name": "NodeJs",
                "image": "nodejs.svg",
                "description": "JavaScript runtime"
            },
            {
                "name": "Android",
                "image": "android.svg",
                "description": "Development Mobile"
            }
        ]
    },
    {
        "title": "Framework",
        "techs": [
            {
                "name": "NestJs",
                "image": "nestjs.svg",
                "description": "Progressive Node.js framework"
            },
            {
                "name": "Spring / Spring Boot",
                "image": "spring.svg",
                "description": "Open source Java-based framework to create Microservices"
            },
            {
                "name": "Flask",
                "image": "flask.svg",
                "description": "Python micro web framework"
            },
            {
                "name": "Flutter",
                "image": "flutter.svg",
                "description": "Framework de développement mobile"
            }
        ]
    },
    {
        "title": "Testing",
        "techs": [
            {
                "name": "Jest",
                "image": "jest.svg",
                "description": "Framework de test JavaScript"
            },
            {
                "name": "Mocha",
                "image": "mocha.svg",
                "description": "Framework de test JavaScript riche en fonctionnalités"
            },
            {
                "name": "JUnit",
                "image": "junit.png",
                "description": "Framework de test Java"
            },
            {
                "name": "Cypress",
                "image": "cypress.svg",
                "description": "JavaScript end-to-end testing"
            },
            {
                "name": "Testing",
                "image": "testing.svg",
                "description": "Tests de logiciel"
            }
        ]
    },
    {
        "title": "Base de donneées",
        "techs": [
            {
                "name": "MySQL",
                "image": "mysql.svg",
                "description": "Système de gestion de base de données relationnelle"
            },
            {
                "name": "Redis",
                "image": "redis.svg",
                "description": "InMemory Database"
            },
            {
                "name": "MongoDB",
                "image": "mongodb.svg",
                "description": "Base de données NoSQL orienté documents"
            }
        ]
    },
    {
        "title": "DevOps",
        "techs": [
            {
                "name": "Docker",
                "image": "docker.svg",
                "description": "Plateforme de conteneurisation"
            },
            {
                "name": "Git",
                "image": "git.svg",
                "description": "Version Control"
            },
            {
                "name": "Github",
                "image": "github.svg",
                "description": "Github"
            },
            {
                "name": "Github Actions",
                "image": "github-actions.svg",
                "description": "CI/CD by Github"
            },
            {
                "name": "Gitlab CI/CD",
                "image": "gitlab.svg",
                "description": "CI/CD by Gitlab"
            },
            {
                "name": "Jenkins",
                "image": "jenkins.svg",
                "description": "Serveur d'automatisation"
            },
            {
                "name": "Terraform",
                "image": "terraform.svg",
                "description": "Infrastructure as Code"
            },
            {
                "name": "Pulumi",
                "image": "pulumi.svg",
                "description": "Modern Infrastructure as Code"
            }
        ]
    },
    {
        "title": "Cloud",
        "techs": [
            {
                "name": "Google Cloud",
                "image": "google-cloud-platform.svg",
                "description": "Google Cloud: Cloud Computing Services"
            },
            {
                "name": "Firebase",
                "image": "firebase.svg",
                "description": "Fun Cloud"
            }
        ]
    },
    {
        "title": "Backend",
        "techs": [
            {
                "name": "RabbitMQ",
                "image": "rabbitmq.svg",
                "description": "Message Queue"
            },
            {
                "name": "Network",
                "image": "network.svg",
                "description": "Reseaux: HTTP, TSL, SSL, DNS"
            },
            {
                "name": "NGINX",
                "image": "nginx.svg",
                "description": "Seveur Web, reverse proxy, load balance"
            }
        ]
    },
    {
        "title": "OS",
        "techs": [
            {
                "name": "Linux",
                "image": "linux.svg",
                "description": "Awesome Open-source OS"
            }
        ]
    },
    {
        "title": "Tools",
        "techs": [
            {
                "name": "Git",
                "image": "git.svg",
                "description": "Version Control"
            },
            {
                "name": "Bash",
                "image": "bash.svg",
                "description": "Bash, Shell scripting"
            },
            {
                "name": "Vagrant",
                "image": "vagrant.svg",
                "description": "Gestionnaire d'environnement"
            },
            {
                "name": "Gradle",
                "image": "gradle.svg",
                "description": "Moteur de production"
            },
            {
                "name": "Slack",
                "image": "slack.svg",
                "description": "Communiquer avec votre équipe"
            },
            {
                "name": "Trello",
                "image": "trello.svg",
                "description": "Organisez n'importe quoi avec n'importe qui, n'importe où!"
            },
            {
                "name": "Notion",
                "image": "notion.png",
                "description": "L'espace de travail tout-en-un pour vos notes, taches"
            }
        ]
    },
    {
        "title": "Editeur",
        "techs": [
            {
                "name": "Jetbrains",
                "image": "jetbrains.svg",
                "description": "IDE et outils de developpement"
            },
            {
                "name": "VSCode",
                "image": "vscode.svg",
                "description": "Editeur de code moderne"
            }
        ]
    }
]

export default topics;
