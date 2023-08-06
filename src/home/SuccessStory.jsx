import React from 'react';
import UseSuccessStory from '../hooks/UseSuccessStory';
import Loader from '../utilities/Loader';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { baseUrl } from '../baseurl/BaseUrl';
import useUser from '../hooks/useUser';

const SuccessStory = () => {
<<<<<<< HEAD
    const [successStory, refetch, isLoading] = UseSuccessStory()
    // console.log(successStory);

    const { userResponse, userLoading } = useUser();

    if (isLoading) {
        return < Loader />
    }



    const handleSuccessDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: 'You are about to delete the Programs. This action cannot be undone!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'Cancel',
            });
            if (result.isConfirmed) {
                await fetch(`${baseUrl}/success/${id}`, {
                    method: 'DELETE',
                });
                toast.success('Success story deleted successfully!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                refetch()
            }
        } catch (error) {
            console.error('Error deleting student:', error);
        }
    };
=======
    // TODO  SuccessStory  delete
>>>>>>> 9629552b2eb794509dec85191762569b0b951f96
    return (
        <div className="row w-100 mx-auto">
            <h1 className='fw-medium mb-4 text-center text-success'>সফলদের গল্প</h1>

            {
                successStory.map(success => <div key={success._id} className="col-md-3">
                    <div
                        className="card text-center pt-2"
                        style={{
                            backgroundColor: "#f1f1f1",
                            boxShadow: "inset 0px 3px 6px #6d9197"
                        }}
                    >
                        <div className="card-header d-flex justify-content-center align-items-center border-0">
                            <img className='img-circle'
                                width={'100px'}
                                src="https://unmesh.com/media/Images/Unmesh/Testimonial/MAP221st.png"
                                alt={success.studentName}
                                style={{ border: "4px solid #6d9197" }}
                            />
                        </div>
                        <div className="card-body">
                            <h3>{success.studentName}</h3>
                            <h5>ভর্তি পরীক্ষা: {success.graduationYear}</h5>
                            <h6 className='fs-4 fw-bold' style={{ color: "#6d9197" }}>{success.university}{success.department}</h6>
                            <div className="quote" style={{ position: "relative" }}>
                                <span
                                    style={{
                                        backgroundColor: "#6d9197",
                                        borderBottom: "15px solid #f1f1f1"
                                    }}
                                />
                                <span
                                    style={{
                                        backgroundColor: "#6d9197",
                                        borderBottom: "15px solid #f1f1f1"
                                    }}
                                />
                            </div>
                            <p>
                                {success.message}
                            </p>
                            <hr style={{ backgroundColor: "#6d9197" }} />
                        </div>

                        {
                            userResponse?.role == 'admin' ? <button onClick={() => { handleSuccessDelete(success._id) }} className='bg-danger border border-3 border-dark-subtle btn fw-bold'>ডিলেট</button> : ''
                        }



                    </div>
<<<<<<< HEAD
                </div>)
            }

=======
                </div>
            </div>
            <div className="col-md-3">
                <div
                    className="card text-center pt-2"
                    style={{
                        backgroundColor: "#f1f1f1",
                        boxShadow: "inset 0px 3px 6px #6d9197"
                    }}
                >
                    <div className="card-header d-flex justify-content-center align-items-center border-0">
                        <img className='img-circle'
                            width={'100px'}
                            src="https://unmesh.com/media/Images/Unmesh/Testimonial/MAP221st.png"
                            alt="রাফসান জামান"
                            style={{ border: "4px solid #6d9197" }}
                        />
                    </div>
                    <div className="card-body">
                        <h3>রাফসান জামান</h3>
                        <h5>ভর্তি পরীক্ষা: ২০২২-২৩</h5>
                        <h6 className='fs-4 fw-bold' style={{ color: "#6d9197" }}>মেডিকেল ১ম</h6>
                        <div className="quote" style={{ position: "relative" }}>
                            <span
                                style={{
                                    backgroundColor: "#6d9197",
                                    borderBottom: "15px solid #f1f1f1"
                                }}
                            />
                            <span
                                style={{
                                    backgroundColor: "#6d9197",
                                    borderBottom: "15px solid #f1f1f1"
                                }}
                            />
                        </div>
                        <p>
                            কলেজের শুরু থেকেই আমি মেডিকেল ভর্তি পরীক্ষার জন্য প্রস্তুতি নিয়েছি।
                            তখন থেকে প্রতিদিনই নির্দিষ্ট টার্গেট সেট করে পড়তাম আর সেই টার্গেট পূরণ
                            করার চেষ্টা করতাম। আর এক্ষেত্রে আমি মূল বইকে বেশি প্রাধান্য দিয়েছি।
                            তবে এর পাশাপাশি বেশি বেশি MCQ সল্ভ করতাম। আমার মেডিকেল ভর্তি পরীক্ষায়
                            উন্মেষ এর ‘ইউনিক এক্সাম সিস্টেম’ খুবই গুরুত্বপূর্ণ ভূমিকা পালন করেছে,
                            কারণ অনুরূপ এক্সাম সিস্টেমে মেডিকেল ভর্তি পরীক্ষাও অনুষ্ঠিত হয়েছে। আমি
                            মনে করি মেডিকেল ভর্তি পরীক্ষায় সফল হতে এর গুরুত্ব অনেক।
                        </p>
                        <hr style={{ backgroundColor: "#6d9197" }} />
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div
                    className="card text-center pt-2"
                    style={{
                        backgroundColor: "#f1f1f1",
                        boxShadow: "inset 0px 3px 6px #658b6f"
                    }}
                >
                    <div className="card-header d-flex justify-content-center align-items-center border-0">
                        <img className='img-circle'
                            width={'100px'}
                            src="https://unmesh.com/media/Images/Unmesh/Testimonial/MAP221st.png"
                            alt="আসিফ রহমান নিহাল"
                            style={{ border: "4px solid #658b6f" }}
                        />
                    </div>
                    <div className="card-body">
                        <h3>আসিফ রহমান নিহাল</h3>
                        <h5>ভর্তি পরীক্ষা: ২০২২-২৩</h5>
                        <h6 style={{ color: "#658b6f" }} className='fs-4 fw-bold'>মেডিকেল ২য়</h6>
                        <div className="quote" style={{ position: "relative" }}>
                            <span
                                style={{
                                    backgroundColor: "#658b6f",
                                    borderBottom: "15px solid #f1f1f1"
                                }}
                            />
                            <span
                                style={{
                                    backgroundColor: "#658b6f",
                                    borderBottom: "15px solid #f1f1f1"
                                }}
                            />
                        </div>
                        <p>
                            আমি মেডিকেল ভর্তি প্রস্তুতির শুরু থেকেই উন্মেষ-এর সাথে ছিলাম। তাই
                            উন্মেষ-এর রুটিন, গাইডলাইন, স্টাডি ম্যাটেরিয়ালস এবং সময়োপযোগী সিদ্ধান্ত
                            আমার প্রস্তুতিকে অনেক বেগবান করেছে। আমি নিয়মিত ক্লাসের পাশাপাশি উন্মেষ
                            এর সকল পরীক্ষা দেওয়ার চেষ্টা করতাম এবং এর মাধ্যমে চিহ্নিত ভুলগুলো
                            খুঁজে বের করে সেগুলো সমাধান করতাম। এছাড়াও উন্মেষ-এর রেকর্ডেড মাস্টার
                            ক্লাস এবং Q&amp;A সার্ভিস আমার প্রস্তুতিকে পূর্ণতা দিয়েছে। আর শেষ
                            মুহূর্তের প্রস্তুতিতে উন্মেষে যে ফাইনাল মডেল টেস্টগুলো দিয়েছি, সেগুলো
                            সম্পূর্ণ মেডিকেল স্ট্যান্ডার্ড ছিল বলে আমি বেশ উপকৃত হয়েছি।
                        </p>
                        <hr style={{ backgroundColor: "#658b6f" }} />
                    </div>
                </div>
            </div>
>>>>>>> 9629552b2eb794509dec85191762569b0b951f96

        </div>

    );
};

export default SuccessStory;

