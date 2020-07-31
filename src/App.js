import React from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/css/profile-picture.css";
import "./assets/css/footer.css";

import Header from "./components/Header";
import Hero from "./components/Hero.jsx";
import TeamDistribution from "./components/TeamDistribution";
import TeamDistributionItem from "./components/TeamDistributionItem";
import Footer from "./components/Footer";
import ModalCrearPerfil from "./components/ModalCrearPerfil.jsx";
import api from "./api";

import ProfileCard from "./components/ProfileCard";

const defaultValues = {
  role: "NA",
  birthdate: "1990-01-01",
  facebook: "NA",
};

const defaultEmpty = {
  _id: "",
  name: "",
  birthdate: "1990-01-01",
  origin_city: "",
  country: "",
  technical_profile: "",
  platzi_profile: "",
  twitter_profile: "",
  linkedin_profile: "",
  github_profile: "",
  role: "NA",
  superpower: "",
  weakness: "",
  description: "",
  photo: "",
  email: "",
  facebook: "NA",
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      error: null,
      showCreateProfileModal: "",
      editMode: false,
      createProfileForm: {},
      burgerActive: false,
    };
  }

  toggleBurger = () => {
    this.setState({
      burgerActive: !this.state.burgerActive,
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const data = await api.profiles.list();

      this.setState({
        loading: false,
        showCreateProfileModal: "",
        data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  };

  showCreateProfileModal = () => {
    this.setState({
      showCreateProfileModal: "aparece",
      createProfileForm: { ...defaultEmpty },
      editMode: false,
    });
  };

  showEditProfileModal = async (id) => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const profile = await api.profiles.read(id);

      this.setState({
        showCreateProfileModal: "aparece",
        createProfileForm: { ...profile },
        editMode: true,
        loading: false,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  hideCreateProfileModal = (id) => {
    this.setState({ showCreateProfileModal: "" });
  };

  handleChangeCreateProfileForm = (e) => {
    this.setState({
      createProfileForm: {
        ...this.state.createProfileForm,
        ...defaultValues,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmitProfile = async (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
      error: null,
    });

    const loadingSwal = Swal.fire({
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      await api.profiles.create(this.state.createProfileForm);
      await this.fetchData();

      loadingSwal.close();

      Swal.fire({
        icon: "success",
        title: "Operación Exitosa",
      });
    } catch (error) {
      console.log(error);

      loadingSwal.close();

      Swal.fire({
        icon: "error",
        title: "Se produjo un error. Intente de nuevo",
      });

      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  handleUpdate = async (e, id) => {
    e.preventDefault();
    this.setState({
      loading: true,
      error: null,
    });

    const loadingSwal = Swal.fire({
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      await api.profiles.update(id, this.state.createProfileForm);
      await this.fetchData();

      loadingSwal.close();

      Swal.fire({
        icon: "success",
        title: "Operación Exitosa",
      });
    } catch (error) {
      loadingSwal.close();

      Swal.fire({
        icon: "error",
        title: "Se produjo un error. Intente de nuevo",
      });

      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  handleDelete = async (e, id) => {
    e.preventDefault();

    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#55834f',
      // cancelButtonColor: '#d33',
			confirmButtonText: "Sí, Eliminalo",
			cancelButtonText: "Cancelar"
    });

    if (result.value) {
      this.setState({
        loading: true,
        error: null,
      });

      const loadingSwal = Swal.fire({
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });

      try {
        await api.profiles.remove(id, this.state.createProfileForm);
        await this.fetchData();

        loadingSwal.close();

        Swal.fire({
          icon: "success",
          title: "Operación Exitosa",
        });
      } catch (error) {
        loadingSwal.close();

        Swal.fire({
          icon: "error",
          title: "Se produjo un error. Intente de nuevo",
        });

        this.setState({
          loading: false,
          error: error,
        });
      }
    }
  };

  render() {
    return (
      <div className="App">
        <Header
          onToggleBurger={this.toggleBurger}
          burgerActive={this.state.burgerActive}
        />
        <Hero />
        <TeamDistribution>
          {this.state.data
            .filter((profile) => profile.main)
            .map((profile, index) => (
              <TeamDistributionItem
                profile={profile}
                classPosition={`img-${index + 1}`}
                key={profile.id}
              />
            ))}
        </TeamDistribution>
        <div className="row profile-mobile">
          {this.state.data.map((profile) => (
            <div className="col-12 col-xl-6 profile-container-mobile">
              <ProfileCard
                showModal={this.showEditProfileModal}
                profile={profile}
                key={profile._id}
              />
            </div>
          ))}
        </div>
        <Footer showModal={this.showCreateProfileModal} />
        <ModalCrearPerfil
          editMode={this.state.editMode}
          handleUpdate={this.handleUpdate}
          onChangeForm={this.handleChangeCreateProfileForm}
          formValues={this.state.createProfileForm}
          toggle={this.state.showCreateProfileModal}
          hideModal={this.hideCreateProfileModal}
          handleSubmit={this.handleSubmitProfile}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
