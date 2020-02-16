import emailjs from "emailjs-com";
import React, {Component} from "react";
import HomeButton from "./HomeButton";

interface IIssuePageProps {

}

interface IIssuePageState {
    from: string;
    email: string;
    message: string;
    serviceId: string;
    templateId: string;
    userId: string;
}

class IssuePage extends Component<IIssuePageProps, IIssuePageState> {
    constructor(props: IIssuePageProps, state: IIssuePageState) {
        super(props);

        this.state = {
            email: process.env.EMAIL_EMAIL,
            from: process.env.EMAIL_FROM,
            message: "",
            serviceId: process.env.EMAIL_SERVICE_ID,
            templateId: process.env.EMIAL_TEMPLATE_ID,
            userId: process.env.EMAIL_USER_ID,
        };

        this.submitForm = this.submitForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    public render() {
        return (
            <div className="issue row h-100">
                <HomeButton />
                <div className="issue-title col-xl-12">
                    <h1>Problemer eller feil</h1>
                </div>
                <div className="col-xl-12">
                    <form onSubmit={this.handleSubmit}>
                        <div className="issue-form-group form-group row">
                            <div className="col-xl-12">
                            <label className="issue-form-label form-check-label">Hva er problemet/feilen?</label>
                            </div>
                            <div className="col-xl-12">
                            <textarea
                                className="issue-form-input form-control"
                                name="message"
                                onChange={this.onChange}
                                placeholder="Skriv din melding her..."
                                value={this.state.message}
                                required
                            />
                            </div>
                            <div className="col-xl-12">
                            <button type="submit" className="issue-form-submit btn btn-primary">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    private validateForm(): boolean {
        return true;
    }

    private async submitForm(variables: any): Promise<void> {
        await emailjs.send(
            this.state.serviceId,
            this.state.templateId,
            variables,
            this.state.userId,
        ).then((result) => {
            console.log("Email successfully sent!");
        })
        .catch((error) => {
            console.error("Mail failed to send:", error);
        });
    }

    private async onChange(event: React.ChangeEvent<HTMLTextAreaElement>): Promise<void> {
        event.preventDefault();

        return new Promise((resolve) => {
            this.setState({message: event.target.value});
        });
    }

    private async handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        if (this.validateForm()) {
            await this.submitForm({
                from_name: this.state.from,
                message_html: this.state.message,
                reply_to: this.state.email,
            })
            .then(() => {
                this.forceUpdate();
            })
            .then(() => {
                alert("Din melding har blitt registrert!");
            })
            .then(() => {
                window.location.reload();
            });
        }
    }
}

export default IssuePage;
