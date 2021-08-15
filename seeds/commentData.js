const { Comment } = require('../models');

const commentData = [
    {
        content: 'Graece timeam vidisse vel ne, offendit suscipiantur pro in. An saperet accommodare sed, ne dico sint appetere vim.',
        post_id: 1,
        user_id: 2,
    },
    {
        content: 'Ius ex dolorum invenire, essent utroque ut pro. Stet vitae iudico an vel, ridens mollis ullamcorper id ius, et nobis pertinacia vel. Et labore instructior his, an duo postea molestiae, ea sed nonumes accusam.',
        post_id: 1,
        user_id: 3,
    },
    {
        content: 'Homero vivendum persecuti no vis. Sit eu diam illum temporibus.',
        post_id: 2,
        user_id: 1,
    },
    {
        content: 'Nam scaevola democritum te. Nec ad audiam similique. Affert munere ei quo, ei vim sint idque postulant, sed quodsi eirmod delicata eu. Ei sea partem postea iisque, vide affert dissentiet eum an, quo facete commune ex. Mei id legere facilis, eos admodum assentior ne.',
        post_id: 2,
        user_id: 2,
    },
    {
        content: 'Erat omnis percipit cu pri, vel quem tritani corrumpit an. Sea no zril detracto phaedrum, ut has probatus dissentiet. Populo semper principes ei his, per quodsi molestiae no.',
        post_id: 3,
        user_id: 3,
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;