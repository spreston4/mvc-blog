const { Post } = require('../models');

const postData = [
    {
        title: 'Lorem ipsum dolor sit amet.',
        content: 'Lorem ipsum dolor sit amet, ad noster definiebas philosophia sit. Ignota nostrum ad mei. Quis reque mollis ea usu, sit eu volutpat sapientem, cu mei cibo dicat. Ne illum definitiones est, te primis complectitur mediocritatem sed. Eos mentitum evertitur dissentias at. Usu et alia ignota disputationi, id decore definitionem qui, propriae fabellas erroribus pri an',
        user_id: 1,
    },
    {
        title: 'Cu sea scaevola periculis',
        content: 'Sed no efficiendi honestatis, vel et oratio delenit delectus. Sit molestiae definiebas eu. Stet prima utroque mea an, vis meliore oporteat te. Ne deserunt democritum vix, indoctum signiferumque no cum. Vix no appetere euripidis. At periculis reprimique ius, te malis repudiare mel.',
        user_id: 2,
    },
    {
        title: 'Vix no appetere euripidis',
        content: 'Alienum splendide sed ex, eos alia molestie facilisi at. Sed meis eligendi et, reque gloriatur sed ne. Viris conceptam ex his. Legendos persecuti efficiantur vim te. Has natum nullam contentiones ea.',
        user_id: 3,
    },
    {
        title: 'Ea vim quot invenire',
        content: 'Ius ex dolorum invenire, essent utroque ut pro. Stet vitae iudico an vel, ridens mollis ullamcorper id ius, et nobis pertinacia vel. Et labore instructior his, an duo postea molestiae, ea sed nonumes accusam. An consul tamquam elaboraret quo, eum vero euripidis et. Vis ex accumsan voluptua voluptatum, eum etiam consulatu pertinacia ex.',
        user_id: 1,
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;