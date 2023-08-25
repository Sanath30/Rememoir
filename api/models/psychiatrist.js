const mongoose = require('mongoose');

const psychiatristSchema = new mongoose.Schema(
    {
        firstName: { 
            type: String, 
            required: true 
        },
        lastName: { 
            type: String, 
            required: true 
        },
        birthDate: { 
            type: Date,
            required: true
        },
        gender: { 
            type: String, 
            enum: ['Male', 'Female', 'Other'],
            required: true
        },
        contact: {
            email: { 
                type: String, 
                required: true 
            },
            phone: { 
                type: String, 
                required: true 
            },
            addresses: [
                {
                    houseNo: { 
                        type: String, 
                        required: true 
                    },
                    street: { 
                        type: String, 
                        required: true 
                    },
                    city: { 
                        type: String, 
                        required: true 
                    },
                    state: { 
                        type: String, 
                        required: true 
                    },
                    country: { 
                        type: String, 
                        required: true 
                    },
                    zip: { 
                        type: String, 
                        required: true 
                    },
                }
            ],
        },
    },
    {
        timestamps: true
    }
)

const Psychiatrist = mongoose.model('Psychiatrist', psychiatristSchema);

module.exports = Psychiatrist;
