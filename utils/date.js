export default function formatDate(date) {
    return new Date(date).toLocaleDateString('fr-fr', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        timeZone: 'utc'
    })
}
