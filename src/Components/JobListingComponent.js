import React, { Component, Fragment } from 'react';
import { AsyncPaginate } from "react-select-async-paginate";
import { getAllJobs, getJobDetails } from '../Services/Jobs';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

class JobListingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      page: 1,
      value: "",
      jobDetails: {
        company: "",
        company_logo: null,
        company_url: "",
        created_at: "",
        description: "",
        how_to_apply: "",
        id: "",
        location: "",
        title: "",
        type: "",
        url: "",
      }
    };
  }

  // load options
  loadOptions = async (search, loadedOptions, { page }) => {
    let data = await getAllJobs(page, search).then((res) => {
      this.props.postJobList(res);
      return {
        options:
          res.data.data.results &&
          res.data.data.results.map((item) => {
            return {
              key: item.id,
              value: item.title,
              label: `${item.company} | ${item.title}`,
            };
          }),
        totalPage:
          parseInt(res.data.data.pageMeta.total || 0) /
          parseInt(res.data.data.pageMeta.pageSize || 0),
      };
    });

    return {
      options: data.options,
      hasMore: data.totalPage > page ? true : false,
      additional: {
        page: page + 1,
      },
    };
  };

  // search with debounce
  searchAPIDebounced = AwesomeDebouncePromise(this.loadOptions, 300);

  // select an option
  selectOption = async (e) => {
    if (e != null) {
      let jobDetails = {};
      let jobDetailsFetched = await getJobDetails(e.key);
      if (jobDetailsFetched.data.data) {
        this.setState({
          jobDetails: jobDetailsFetched.data.data,
          value: e
        })
      }
      console.log('The job details her eis ---> ', jobDetailsFetched.data.data);
    }
  };


  render() {
    const { jobDetails, value } = this.state;
    return (
      <Fragment>
        <div className="col-md-12 center">
          <div className="d-flex mt-auto justify-content-center">
            <div className="d-flex flex-column w-100 mx-5">
              <div className="p-2 text-light text-capitalize font-italic"><h4>Job Search..</h4></div>
              <div className="p-2">
                <AsyncPaginate
                  value={value}
                  loadOptions={this.searchAPIDebounced}
                  additional={{
                    page: 1,
                  }}
                  isClearable={true}
                  isSearchable={true}
                  classNamePrefix="select"
                  onChange={(e) => {
                    this.selectOption(e);
                  }}
                />
              </div>
            </div>
          </div>
          {/* DETAILS */}
          <div className="col-md-12 ml-5">
            {jobDetails && jobDetails.company && <div className="d-flex flex-column bd-highlight mb-3">
              <div className="p-2 bd-highlight">
                <div className="card" style={{
                  "width": "95%"
                }}>
                  <img className="card-img-top img-fluid image-small" src={jobDetails.company_logo} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Company Name: {jobDetails.company} | Title: {jobDetails.title}</h5>
                    <h5 className="card-text">Location: {jobDetails.location} | Type: {jobDetails.type}</h5>
                    <p className="card-text">{jobDetails.description}</p>
                    <a href={jobDetails.url} className="btn btn-primary">Check The Link</a>
                  </div>
                </div>
              </div>
            </div>
            }
          </div>
        </div>
      </Fragment >
    );
  }
}

export default JobListingComponent;