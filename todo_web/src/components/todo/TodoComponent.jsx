import React,{Component} from "react";
import moment from 'moment'
import {Formik, Form, Field, ErrorMessage} from "formik";
import AuthenticationService from "./AuthenticationService";
import TodoServices from "../../services/TodoServices";

class TodoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id ,
            description: '' ,
            targetDate: moment(new Date()).format('YYYY-MM-DD'),
            username: AuthenticationService.getLoggedInUserName()
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
        TodoServices.findTodo(this.state.username,this.state.id)
            .then(
                response => {
                    this.setState({
                        description : response.data.description,
                        targetDate : moment(response.data.targetDate).format('YYYY-MM-DD'),
                    })
                }
            )
    }

    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = '請輸入代辦事項'
        }
        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = '請輸入正確的日期'
        }
        return errors
    }
    onSubmit(values) {

        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate,
            done: ((values.done) === "true"),
        }
        if (this.state.id === -1) {
            TodoServices.createTodo(this.state.username, todo)
                .then(() => this.props.history.push('/todos'))
        } else {
            TodoServices.updateTodo(this.state.username, this.state.id, todo)
                .then(() => this.props.history.push('/todos'))
        }

    }

    render() {

        let { description, targetDate } = this.state

        return (
            <div>
                <h1>{((this.state.id)==='-1')?"新增":"修改"}代辦事項</h1>
                <div className="container">
                    <Formik
                        initialValues={{ description, targetDate }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            () => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                                  className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component="div"
                                                  className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>事項</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>日期</label>
                                        <Field className="form-control" type="date" name="targetDate" />
                                    </fieldset>
                                    <fieldset className={"form-group"}>
                                        <label>是否達成</label>
                                        <Field as="select" name="done">
                                            <option value="1">請選擇</option>
                                            <option value="true">達成</option>
                                            <option value="false">未達成</option>
                                        </Field>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">儲存</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default TodoComponent