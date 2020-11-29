import React,{Component} from "react";
import moment from 'moment'
import {Formik, Form, Field, ErrorMessage} from "formik";
import TodoServices from "../../services/TodoServices";

class AddUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            username: '' ,
            name:'',
            birthDate: moment(new Date()).format('YYYY-MM-DD'),
            email:'',
        }
        this.query = this.query.bind(this);
        this.validate = this.validate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        if (this.state.id === -1) {
            return
        }
        this.query()
    }
    query(){

    }

    validate(values) {
        let errors = {}
        console.log(values)
        if (!values.username) {
            errors.name = '請輸入姓名'
        }
        if (!values.name) {
            errors.name = '請輸入暱稱'
        }
        if (!values.email) {
            errors.email = '請輸入信箱';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = '信箱格式錯誤';
        }
        if (!moment(values.birthDate).isValid()) {
            errors.birthDate = '請輸入正確的日期'
        }
        if(!values.password){
            errors.password = '請輸入密碼'
        }else if (!values.passwordcheck){
            errors.password = '請輸入密碼'
        } else if (values.password !== values.passwordcheck) {
            errors.password = '密碼不同請重新輸入'
        }
        if(!((values.gender) ==="man" || (values.gender) ==="girl")){
            errors.gender = '請選擇性別'
        }
        return errors
    }
    onSubmit(values) {

        let UserInformation = {
            id: this.state.id,
            username: values.description,
            name : values.name,
            birthDate : values.birthDate,
            password : values.password,
            gender : ((values.gender) === "man")?"男":"女",

        }
        if (this.state.id === -1) {
            TodoServices.createTodo(this.state.username, UserInformation)
                .then(() => this.props.history.push('/login'))
        } else {
            TodoServices.updateTodo(this.state.username, this.state.id, UserInformation)
                .then(() => this.props.history.push(`/welcome/${this.state.name}`))
        }

    }


    render() {

        let { username,name,birthDate,password } = this.state
        return (
            <div className={"container"}>
                <h1>{((this.state.id)==='-1')?"新增":"修改"}用戶</h1>
                <div className="container">
                    <Formik
                        initialValues={{ username,name,birthDate,password }}
                        onSubmit={this.onSubmit}
                        validateOnChange={true}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}

                    >
                        {
                            () => (
                                <Form>
                                    {((this.state.id)==='-1') && <fieldset className="form-group">
                                        <label>姓名(之後不能修改)</label>
                                        <Field className="form-control" type="text" name="username"/>
                                    </fieldset>}
                                    <fieldset className="form-group">
                                        <label>暱稱</label>
                                        <Field className="form-control" type="text" name="name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>生日</label>
                                        <Field className="form-control" type="date" name="birthDate" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>信箱(登入帳號)</label>
                                        <Field className="form-control" type="email" name="email" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>密碼</label>
                                        <Field className="form-control" type="password" name="password" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>確認密碼</label>
                                        <Field className="form-control" type="password" name="passwordcheck" />
                                    </fieldset>
                                    <fieldset className={"form-group"}>
                                        <label>性別</label>
                                        <Field as="select" name="gender">
                                            <option value="1">請選擇</option>
                                            <option value="man">男生</option>
                                            <option value="girl">女生</option>
                                        </Field>
                                    </fieldset>
                                    <ErrorMessage name="username" component="div"
                                                  className="alert alert-warning" />
                                    <ErrorMessage name="name" component="div"
                                                  className="alert alert-warning" />
                                    <ErrorMessage name="birthDate" component="div"
                                                  className="alert alert-warning" />
                                    <ErrorMessage name="email" component="div"
                                                  className="alert alert-warning" />
                                    <ErrorMessage name="password" component="div"
                                                  className="alert alert-warning" />
                                    <ErrorMessage name="gender" component="div"
                                                  className="alert alert-warning" />
                                    <button className="btn btn-success" type="submit">{((this.state.id)==='-1')?"確認新增":"確認修改"}</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default AddUserComponent