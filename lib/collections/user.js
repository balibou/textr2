Schema = {};

// Schema.UserCountry = new SimpleSchema({
//     name: {
//         type: String
//     },
//     code: {
//         type: String,
//         regEx: /^[A-Z]{2}$/
//     }
// });

Schema.UserProfile = new SimpleSchema({
    // firstName: {
    //     type: String,
    //     regEx: /^[a-zA-Z-]{2,25}$/,
    //     optional: true
    // },
    // lastName: {
    //     type: String,
    //     regEx: /^[a-zA-Z]{2,25}$/,
    //     optional: true
    // },
    // birthday: {
    //     type: Date,
    //     optional: true
    // },
    // gender: {
    //     type: String,
    //     allowedValues: ['Male', 'Female'],
    //     optional: true
    // },
  picture: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
        label: 'Choisissez une image'
      }
    }
  },
  entreprise : {
    type: String,
    label: 'Entreprise',
    regEx: /^[a-z0-9A-z .]{3,30}$/,
    optional: true,
    autoform: {
      placeholder: 'Veuillez remplir le champ'
    }
  },
  telephone: {
    type: String,
    label: 'Téléphone',
    regEx: /^[0-9-]{10,10}$/,
    optional: true,
    autoform: {
      'label-type': 'floating',
      placeholder: 'Veuillez remplir le champ'
    }
  },
  rue: {
    type: String,
    label: 'Rue',
    max: 100,
    autoform: {
      'label-type': 'floating',
      placeholder: 'Veuillez remplir le champ'
    }
  },
  codePostal: {
    type: String,
    label: 'Code postal',
    regEx: /^[0-9]{5}$/,
    autoform: {
      'label-type': 'floating',
      placeholder: 'Veuillez remplir le champ'
    }
  },
  ville: {
    type: String,
    label: 'Ville',
    max: 50,
    autoform: {
      'label-type': 'floating',
      placeholder: 'Veuillez remplir le champ'
    }
  },
  
  // Website: {
  //   type: String,
  //   regEx: SimpleSchema.RegEx.Url,
  //   optional: true
  // },
    // bio: {
    //     type: String,
    //     optional: true
    // },
    // country: {
    //     type: Schema.UserCountry,
    //     optional: true
    // }
});

Schema.User = new SimpleSchema({
  username: {
    type: String,
    regEx: /^[a-z0-9A-Z_]{3,15}$/
  },
  emails: {
    type: [Object],
    // this must be optional if you also use other login services like facebook,
    // but if you use only accounts-password, then it can be required
    optional: true
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  profile: {
    type: Schema.UserProfile,
    optional: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  // // Add `roles` to your schema if you use the meteor-roles package.
  // // Option 1: Object type
  // // If you specify that type as Object, you must also specify the
  // // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
  // // Example:
  // // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
  // // You can't mix and match adding with and without a group since
  // // you will fail validation in some cases.
  // roles: {
  //   type: Object,
  //   optional: true,
  //   blackbox: true
  // },
  // // Option 2: [String] type
  // // If you are sure you will never need to use role groups, then
  // // you can specify [String] as the type
  // roles: {
  //   type: [String],
  //   optional: true
  // },
  status: {
    type: Object,
    optional: true,
    blackbox: true
  }
});

Meteor.users.attachSchema(Schema.User);