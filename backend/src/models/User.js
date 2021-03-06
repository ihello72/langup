module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            field: 'email',
            type: DataTypes.STRING(50),
            primaryKey: true,
        },
        password: {
            field: 'password',
            type: DataTypes.STRING(300),
        },
        name: {
            field: 'name',
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        profileImage: {
            field: 'profile_image',
            type: DataTypes.STRING(300),
            defaultValue: 'http://qrock.cafe24app.com/public/users/ihello0720@gmail.com/SYS02.png',
        },
        introduce: {
            field: 'introduce',
            type: DataTypes.STRING(500),
            defaultValue: '',
        },
        createDate: {
            field: 'create_date',
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: 'user',
        timestamps: false,
    });

    User.associate = (models) => {
        models.User.hasMany(models.UserBook, { foreignKey: 'userEmail' });
    }

    User.selectByUser = id => Member.findById(id, { attributes: ['id', 'name', 'mobile', 'email', 'profile_image', 'status_message', 'department_idx', 'position', 'task', 'tel', 'auth', 'status'], raw: true });

    /**
     * @description
     * 
     * selectByUser: 메서드 오버로딩이 안됨
     * 인자 한 개: 이메일 조회
     * 인자 두 개: 계정 조회
     * 
     */

    User.selectByUserEmail = (email) => {
        return User.findOne({where: {email}, raw: true});
    }

    User.selectByUser = (email, password) => {
        return User.findOne({where: {email, password}, raw: true});
    }

    return User;
}
